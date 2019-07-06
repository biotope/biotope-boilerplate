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

        const cssHandler = {
            match: (options) => options.resource.path.indexOf('.css') > -1,
            handle: (options) => {
                const style = document.createElement('link');
                style.rel = 'stylesheet';
                style.href = options.resource.path;
                document.body.appendChild(style);
            }
        }

        const jsHandler = {
            match: (options) => options.resource.path.indexOf('.js') > -1,
            handle: (options) => {
                const script = document.createElement('script');
                script.src = options.resource.path;
                script.async = true;
                document.body.appendChild(script);
                script.onload = () => callback();
            }
        }

        return new ResourceLoader({
            base: biotope.configuration.get('data.staticResourcesBase'),
            baseMap: {
                '##content': biotope.configuration.get('data.staticResourcesContentRepoBase')
            },
            handler: [
                cssHandler,
                jsHandler
            ]
        });

    }

    setupResourceLoader(init); 
};
