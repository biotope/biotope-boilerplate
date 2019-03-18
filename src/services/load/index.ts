
const componentsLoaded: string[] = [];

const defaultListeners = [
  'WebComponentsReady',
];

export const LoadService = {
  setupBiotope(listeners?: string[]): void {
    (window as WindowWithBiotope).biotope = (window as WindowWithBiotope).biotope || {};
    biotope.components = biotope.components || {};
    biotope.events = biotope.events || {};

    (listeners || defaultListeners).forEach(event => LoadService.listenForEvent(event));
  },

  listenForEvent(eventName: string): void {
    const listener = (): void => {
      biotope.events[eventName] = true;
      window.removeEventListener(eventName, listener);
    };
    window.addEventListener(eventName, listener);
  },

  loadComponent(tag: string, baseUrl: string = COMPONENTS.BASE_URL, port?: number): boolean {
    const url = new URL(`${baseUrl}/build/${tag}.js`);
    if (port) {
      url.port = `${port}`;
    }

    if (componentsLoaded.indexOf(url.href) < 0) {
      componentsLoaded.push(url.href);
      const script = document.createElement('script');
      script.setAttribute('src', url.href);
      document.body.appendChild(script);
      return true;
    }

    return false;
  },
};
