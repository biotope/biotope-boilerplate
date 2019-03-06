import Component from '@biotope/element';

import { ProjectService } from 'services';
import * as style from './bio-header.style';

interface SampleData {
  text: string;
}

export interface BioHeaderProps {
  basePath: string;
}

interface BioHeaderState {
  text: string;
}

export class BioHeader extends Component<BioHeaderProps, BioHeaderState> {
  public static componentName = 'bio-header';

  protected static attributes = ['base-path'];

  public constructor() {
    super();
    this.setState({ text: '' });
  }

  public created(): void {
    this.updateData();
  }

  public render(): HTMLElement {
    const { text } = this.state;
    return this.html`
      <h1 class="${style.header}">
        <slot />
      </h1>
      <p class="${style.paragraph}">
        @biotope/boilerplate v${ProjectService.getBoilerplateVersion()} and
        @biotope/build v${ProjectService.getBuildVersion()} say:
      </p>
      <p class="${style.paragraph}">
        ${text}
      </p>
      <style>
        ${style.toString()}
      </style>
    `;
  }

  protected onPropsChanged(): void {
    this.updateData();
  }

  private updateData(): void {
    const { basePath } = this.props;

    if (basePath !== undefined) {
      fetch(`${basePath}/resources/example.json`)
        .then(response => (response.ok && response.json()) || { text: 'Oops…' })
        .then(({ text }: SampleData) => this.setState({ text }))
        // eslint-disable-next-line no-console
        .catch(console.error);
    }
  }
}
