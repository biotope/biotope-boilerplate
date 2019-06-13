import { wire } from 'hyperhtml';
import { XAccordionProps } from './interfaces/XAccordionProps';
import * as styles from './styles.scss';

export default (
  render: Function,
  data: XAccordionProps,
  createStyle: Function,
) => {
  return render`
        ${createStyle(styles)}
        <div class="accordion">
            ${
              data.heading !== undefined
                ? wire()`<h2 class="accordion__heading">${data.heading}</h2>`
                : ''
            }
            ${
              data.text !== undefined
                ? wire()`<p class="accordion__text">${data.text}</p>`
                : ''
            }
            <slot/>
            ${
              data.linkUrl !== undefined
                ? wire()`<a class="accordion__link" href=${
                    data.linkUrl
                  } target=${data.linkTarget} alt="${data.linkLabel}">${
                    data.linkLabel
                  }</a>`
                : ''
            }
        </div>
    `;
};
