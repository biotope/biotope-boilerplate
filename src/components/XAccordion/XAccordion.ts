import Component from '@biotope/element';
import { XAccordionProps } from './interfaces/XAccordionProps';
import { XAccordionState } from './interfaces/XAccordionState';
import template from './template';

class XAccordion extends Component<XAccordionProps, XAccordionState> {
  protected get defaultProps() {
    return {
      heading: '',
      text: '',
    };
  }
  public static componentName = 'x-accordion';

  public static attributes = [
    'heading',
    'text',
    'link-label',
    'link-url',
    'link-target',
    'open-first-item',
  ];

  constructor() {
    super();
  }

  public connectedCallback() {
    this.addEventListener('accordion.item.panel.open', (e: Event) => {
      this.closeAllOtherPanels(event.target as HTMLElement);
    });
  }

  public render() {
    return template(this.html, this.props, this.createStyle);
  }

  private closeAllOtherPanels(activeSlotItem: HTMLElement) {
    const customTagElement: HTMLElement[] = [].slice.call(
      this.querySelectorAll('x-accordion-item'),
    );

    customTagElement.forEach((element, index) => {
      if (activeSlotItem !== element) {
        const event = new CustomEvent('accordion.item.panel.close');
        element.dispatchEvent(event);
      }
    });
  }
}

export default XAccordion;
