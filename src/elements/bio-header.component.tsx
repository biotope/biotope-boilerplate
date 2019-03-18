import * as React from 'react';

import { BaseComponent } from './base.component';

export class BioHeader extends BaseComponent<BioHeaderProps> {
  protected static componentName = 'bio-header';

  // eslint-disable-next-line class-methods-use-this
  protected buildComponent(props: BioHeaderProps & ElementProps): JSX.Element {
    return <bio-header {...props} />;
  }
}
