import Component from '@biotope/element';

import { ProjectService, DomService } from 'services';
import * as style from './bio-header.style';
import * as dynamic from './bio-header.style-dynamic';

interface SampleData {
  text: string;
}

export interface BioHeaderProps {
  color: string;
  basePath?: string;
}

interface BioHeaderState {
  text: string;
}

const DEFAULT_COLOR = 'lightgray';

export class BioHeader extends Component<BioHeaderProps, BioHeaderState> {
  public static componentName = 'bio-header';

  protected static attributes = [
    'base-path',
    {
      name: 'color',
      converter: (prop: string) => prop || DEFAULT_COLOR,
    },
  ];

  // eslint-disable-next-line class-methods-use-this
  protected get defaultProps(): BioHeaderProps {
    return {
      color: DEFAULT_COLOR,
    };
  }

  public constructor() {
    super();
    this.setState({ text: '' });
  }

  public created(): void {
    super.created();
    this.updateData();
  }

  public render(): HTMLElement {
    const { basePath } = this.props;
    const { text } = this.state;

    return this.html`
      <div class=${style.container} style=${dynamic.container(this.props)}>
        <h1 class=${style.header}>
          <slot />
        </h1>
        <p class=${style.paragraph}>
          @biotope/boilerplate v${ProjectService.getBoilerplateVersion()} and
          @biotope/build v${ProjectService.getBuildVersion()}
          ${basePath ? 'say:' : ''}
        </p>
        <p class=${style.paragraph}>
          ${text}
        </p>
      </div>
      ${DomService.createStyleElement(style)}
    `;
  }

  protected onPropsChanged(): void {
    super.onPropsChanged();
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
