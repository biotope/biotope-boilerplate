import Component from '@biotope/element';
import {
  XAccordionItemProps,
  XAccordionItemRenderProps,
} from './interfaces/XAccordionItemProps';
import template from './template';

class XAccordionItem extends Component<XAccordionItemProps, {}> {
  static componentName = 'x-accordion-item';

  constructor() {
    super();
    this.togglePanel = this.togglePanel.bind(this);
  }

  static attributes = [
    'heading',
    { name: 'opened', converter: value => value != null },
    { name: 'add-bottom-line', converter: value => value !== undefined },
  ];

  public togglePanel(e: Event): void {
    const panel: HTMLElement = this.findClosestElement(
      e.currentTarget,
      '.accordionItem__panel',
    );
    if (panel.classList.contains('accordionItem__panel--open')) {
      this.hideContent(panel);
    } else {
      this.emit('accordion.item.panel.open', null, false);
      this.showContent(panel);
    }
  }

  private showContent(panel: HTMLElement): void {
    const content: HTMLElement = panel.querySelector('.accordionItem__content');

    content.style.height = content.scrollHeight + 'px';
    panel.className += ' accordionItem__panel--open';
    setTimeout(() => {
      content.style.height = 'auto';
    }, 301);
  }

  private hideContent(panel: HTMLElement): void {
    const content: HTMLElement = panel.querySelector('.accordionItem__content');
    content.style.height = content.scrollHeight + 'px';
    panel.classList.remove('accordionItem__panel--open');
    setTimeout(() => {
      content.style.height = '0';
    }, 301);
  }

  private findClosestElement(element: any, selector: string): HTMLElement {
    let matchesFn;

    [
      'matches',
      'webkitMatchesSelector',
      'mozMatchesSelector',
      'msMatchesSelector',
      'oMatchesSelector',
    ].some(
      (fn): boolean => {
        // tslint:disable-next-line: triple-equals
        if (typeof document.body[fn] == 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      },
    );

    let parent: HTMLElement;

    while (element) {
      parent = element.parentElement;
      if (parent && parent[matchesFn](selector)) {
        return parent;
      }
      element = parent;
    }
    return null;
  }

  connectedCallback() {
    this.addEventListener('accordion.item.panel.close', () => {
      const panel = this.shadowRoot.querySelector('.accordionItem__panel');
      if (panel.classList.contains('accordionItem__panel--open')) {
        this.hideContent(
          this.shadowRoot.querySelector('.accordionItem__panel'),
        );
      }
    });
  }

  protected get defaultProps() {
    return {
      heading: 'Static Accordion Item Headline',
      opened: false,
      isLast: false,
      events: {
        togglePanel: this.togglePanel,
      },
    };
  }

  render() {
    const renderProps: XAccordionItemRenderProps = {
      heading: this.props.heading,
      opened: this.props.opened,
      addBottomLine: this.props.addBottomLine,
      events: {
        togglePanel: this.togglePanel,
      },
    };
    return template(this.html, renderProps, this.createStyle);
  }
}

export default XAccordionItem;
