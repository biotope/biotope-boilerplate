
type HTMLElementContent = string | { toString: () => string };

export const DomService = {
  createElement(tagName: string, content: HTMLElementContent = ''): HTMLElement {
    const element = document.createElement(tagName);
    element.innerHTML = typeof content === 'string' ? content : content.toString();
    return element;
  },

  createStyleElement: (style: HTMLElementContent) => DomService.createElement('style', style),

  createSvgElement: (content: HTMLElementContent) => DomService.createElement('div', content).children[0] as HTMLElement,

  supportsVideo: (): boolean => !!document.createElement('video').canPlayType,
};
