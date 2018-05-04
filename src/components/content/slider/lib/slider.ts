export class Slider {
	private sliderElement: any;
	private transitionEndCallback: any;
	private slidesCount: number;
	private slides: any;
	private currentSlide: number;
	private options: any;
	private numberOfClones: number;

    constructor(sliderElement: any, sliderOptions = {}) {
        this.sliderElement = sliderElement;
        this.transitionEndCallback = null;
        this.init(sliderOptions);
    }

    /**
     * Build whole Slider
     *
     * @param {Object} sliderOptions
     */
    init(sliderOptions: any) {
        // Convert DOM elements to array for easier access from JS
        // Remove all invisible slides (ie. display: none;) to avoid empty spacing
        this.slides = Array.prototype.slice.call(this.sliderElement.children).filter((slide: any) => {
            return slide.offsetParent !== null;
        });

        this.slidesCount = this.slides.length;
        if (this.slidesCount === 0) {
            throw new DOMException("Slider does not contain any children (slides)");
        }
        this.currentSlide = 1;

        // Parse options
        this.options = this._getOptions(sliderOptions);

        // Make sure that number of clones is always greater than number of visible slides. Min is 2 clones
        this.numberOfClones = this.options.numberOfVisibleSlides + 1;

        this._build();
        this._createSlideClones(this.numberOfClones);
        this._transitionEnd();
        // Slider width = number of slides + number of clones from both sides / number of visible slides * 100%
        this.sliderElement.style.width = (this.slides.length + this.numberOfClones * 2) / this.options.numberOfVisibleSlides * 100 + "%";
        this.slide(1);
    }

    /**
     * Slide to given slide number
     *
     * @param {int} index Number of slide to go to
     * @return {int} current slide index
     */
    slide(index: number) {
        this.currentSlide = index;

        // Add class that enables animations
        this.sliderElement.classList.add("vjslider__slider--animate");

        // Move slider position to show given slide
        this._moveTo(this.currentSlide);

        // If slider is outside of the slides range, take care of infinite sliding
        if (this.currentSlide > this.slidesCount) {
            this.transitionEndCallback = () => {
                this.currentSlide = 1;
            };

            return this.currentSlide;
        }
        if (this.currentSlide <= 0) {
            this.transitionEndCallback = () => {
                this.currentSlide = this.slidesCount;
            };
        }

        return this.currentSlide;
    }

    /**
     * Move slider to next slide
     *
     * @return {int} current slide index
     */
    next() {
        return this.slide(this.currentSlide + 1);
    }

    /**
     * Move slider to previous slide
     *
     * @return {int} current slide index
     */
    prev() {
        return this.slide(this.currentSlide - 1);
    }

    /**
     * Revert HTML to original state from before VJSlider
     * @returns {VJSlider}
     */
    destroy() {
        // Unwrap from created wrapper
        const wrapper = this.sliderElement.parentNode,
            wrapperParent = wrapper.parentNode;
        wrapperParent.insertBefore(wrapper.firstChild, wrapper);
        wrapperParent.removeChild(wrapper);

        // Remove classes from slider element
        this.sliderElement.classList.remove("vjslider__slider");
        this.sliderElement.classList.remove("vjslider__slider--animate");

        // Remove style attribute
        this.sliderElement.removeAttribute("style");

        // Remove clones
        [].forEach.call(this.sliderElement.querySelectorAll(".vjslider__clone"), (clone: any) => clone.remove());

        // Remove classes and attributes from slides
        this.slides.forEach((slide: any) => {
            slide.classList.remove("vjslider__slide");
            slide.removeAttribute("style");
        });

        return this;
    }

    /**
     * Reload whole slider.
     * It is possible to pass alternative options
     *
     * @param {Object|null} alternativeOptions
     */
    reload(alternativeOptions: any = null) {
        // If alternative options are used, replace old one. Otherwise use current options.
        const options = (alternativeOptions !== null) ? alternativeOptions : this.options;
        this.destroy().init(options);
    }


    /**
     * Create necessary HTML elements around slider
     * Add necessary CSS classes to all elements
     *
     * @return {undefined}
     * @private
     */
    _build() {
        // Prepare slider wrapper
        const parentElement = this.sliderElement.parentNode,
            sliderWrapper = document.createElement("div");
        sliderWrapper.className = "vjslider";

        // Insert whole carousel into the wrapper
        parentElement.replaceChild(sliderWrapper, this.sliderElement);
        sliderWrapper.appendChild(this.sliderElement);

        // Add slider class to moving element
        this.sliderElement.classList.add("vjslider__slider");

        const basis = 100 / (this.numberOfClones * 2 + this.slidesCount);
        // Add slide class and basis to each slide
        this.slides.forEach((slide: any) => {
            slide.classList.add("vjslider__slide");
            slide.style.flexBasis = basis + "%";
        });
    }


    /**
     * Create clones of slides required for infinite animation
     * @param {int} numberOfClones Number of clones to create at the beginning and at the end of the slides.
     * So total number of clones is numberOfClones * 2
     * @return {int} number of clones created on one side of the slider. Will always be the same as numberOfClones
     * @private
     */
    _createSlideClones(numberOfClones: number) {
        // Make sure that there are enough slides available for displaying more than single slide
        // Clone everything until required number of slides is reached
        while (this.options.numberOfVisibleSlides > this.slides.length) {
            this._cloneNodes(this.slides);
            this.slides = this.slides.concat(this.slides);
            this.slidesCount = this.slides.length;
        }

        // Get first and last n elements
        let firstElements = this.slides.slice(0, numberOfClones),
            lastElements = this.slides.slice(-1 * numberOfClones);

        // Make sure that arrays with elements contains exact number of clones.
        // For instances if numberOfClones = 2 but this.slides.length = 1
        firstElements = this._fillMissing(firstElements, numberOfClones, this.slides[0]);
        lastElements = this._fillMissing(lastElements, numberOfClones, this.slides[this.slides.length - 1]);

        // Append clones at the end of the slider
        this._cloneNodes(firstElements);

        // Prepend clones at the beginning of slider
        lastElements.reverse().forEach((el: any) => {
            const clone = el.cloneNode(true);
            clone.classList.add("vjslider__clone");
            this.sliderElement.insertBefore(clone, this.sliderElement.firstChild);
        });

        return numberOfClones;
    }

    /**
     * Clone given nodes list and append them to end of slides list
     * @param {Array} nodesList
     * @private
     */
    _cloneNodes(nodesList: any) {
        nodesList.forEach((el: any) => {
            const clone = el.cloneNode(true);
            clone.classList.add("vjslider__clone");
            this.sliderElement.appendChild(clone);
        });
    }

    /**
     * Fill array to given length with given element
     * This is helper function for the clones.
     * @param {Array} arr Array to fill
     * @param {int} filledArrayLength Number of elements that arr should contain
     * @param {*} fillElement Value pushed to array if there are missing elements
     * @returns {Array} Array with length = filledArrayLength
     * @private
     */
    _fillMissing(arr: any, filledArrayLength: any, fillElement: any) {
        while (arr.length < filledArrayLength) {
            arr.push(fillElement);
        }

        return arr;
    }

    /**
     * Attach event listener to slider element
     *
     * @return {undefined}
     * @private
     */
    _transitionEnd() {
        const eventList = [
            "MSTransitionEnd",
            "msTransitionEnd",
            "transitionend",
            "webkitTransitionEnd"
        ];
        eventList.forEach((event) => {
            this.sliderElement.addEventListener(event, () => {
                if (this._isFunction(this.transitionEndCallback)) {
                    // Clear the callback if needed. We want to make sure that it"s executed only once.
                    this.transitionEndCallback = this.transitionEndCallback();

                    // Remove animating class and do magic for infinite sliding.
                    this.sliderElement.classList.remove("vjslider__slider--animate");
                    this._moveTo(this.currentSlide);
                }
            });
        });
    }

    /**
     * Check if passed object is a function
     *
     * @param {*} obj object to check whether it"s callable or not
     * @returns {boolean} true if given object is a function, false otherwise
     * @private
     */
    _isFunction(obj: any) {
        return Boolean(obj && obj.constructor && obj.call && obj.apply);
    }

    /**
     * Move to given slide by setting position of slider via translate3d
     *
     * @param {int} index slide number
     * @return {undefined}
     * @private
     */
    _moveTo(index: number) {
        this.sliderElement.style.transform = "translate3d(-" + this._calculatePosition(index) + "%, 0, 0)";
    }


    /**
     * Calculate percentage position for translate
     *
     * @param {int} index slide number
     * @returns {number} percentage position for translate animation
     * @private
     */
    _calculatePosition(index: number) {
        // 100 * ( slide position ) / ( number of elements in slider )
        return 100 * (index + this.numberOfClones - 1) / (this.slidesCount + this.numberOfClones * 2);
    }

    /**
     * Parse options. Fill missing defaults and validate given options if they are correct or not
     * @param {Object} options
     * @returns {Object}
     * @private
     */
    _getOptions(options: number) {
        const defaultOptions = {
            numberOfVisibleSlides: 1
        };
        return (<any>Object).assign(defaultOptions, options);
    }
}
