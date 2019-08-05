import ResourceLoader from '@biotope/resource-loader/lib/index.esm';
import { HandleOptions, Handler } from '@biotope/resource-loader/src/types';
import { runInThisContext } from 'vm';

{
  const init = (): void => {
    const elementsWithDataInit: HTMLElement[] = [].slice.call(document.querySelectorAll('[data-init]'));
    elementsWithDataInit.forEach((element: HTMLElement): void => {
      const initFunction = runInThisContext(element.dataset.init);
      initFunction(element);
    });
  };

  const setupResourceLoader = (callback: Function): ResourceLoader => {
    const cssHandler: Handler = {
      match: (options: HandleOptions): boolean => options.resource.path.indexOf('.css') > -1,
      handle: (options: HandleOptions): void => {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = options.resource.path;
        document.body.appendChild(style);
      },
    };

    const jsHandler: Handler = {
      match: (options: HandleOptions): boolean => options.resource.path.indexOf('.js') > -1,
      handle: (options: HandleOptions): void => {
        const script = document.createElement('script');
        script.src = options.resource.path;
        script.async = true;
        document.body.appendChild(script);
        script.onload = (): void => callback();
      },
    };

    return new ResourceLoader({
      base: biotope.configuration.get('data.staticResourcesBase'),
      baseMap: {
        '##content': biotope.configuration.get('data.staticResourcesContentRepoBase'),
      },
      handler: [
        cssHandler,
        jsHandler,
      ],
    });
  };

  setupResourceLoader(init);
}
