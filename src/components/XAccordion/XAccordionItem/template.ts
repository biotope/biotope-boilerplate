import classNames from 'classnames';
import { XAccordionItemRenderProps } from './interfaces/XAccordionItemProps';
import * as styles from './styles.scss';

export default (
  render: Function,
  { heading, opened, events, addBottomLine }: XAccordionItemRenderProps,
  createStyle: Function,
) => {
  const panelClass = classNames('accordionItem__panel', {
    ['accordionItem__panel--open']: opened,
    ['accordionItem__panel--lastItem']: addBottomLine,
  });

  return render`
        ${createStyle(styles)}
        <div class="${panelClass}">
            <h3 class="accordionItem__title">
                <div class="accordionItem__titleLink" onclick="${
                  events.togglePanel
                }">${heading}</div>
            </h3>
            <div class="accordionItem__content">
                <slot/>
                <div class="accordionItem__contentPadding"></div>
            </div>
        </div>
    `;
};
