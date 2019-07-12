import ResourceLoader from '@biotope/resource-loader/lib/index.esm';
const vm = require('vm');

{
    const init = () => {
        const elementsWithDataInit: HTMLElement[] = [].slice.call(document.querySelectorAll('[data-init]'));
        elementsWithDataInit.forEach((element: HTMLElement) => {
            const initFunction = vm.runInThisContext(element.dataset.init);
            initFunction(element);
        });
    }

    const setupResourceLoader = (callback: Function) => {

        return new ResourceLoader({
            base: biotope.configuration.get('data.staticResourcesBase'),
            baseMap: {
                '##microfrontend': biotope.configuration.get('data.staticResourcesMicroFrontends')
            }
        });

    }

    setupResourceLoader(init); 
};
