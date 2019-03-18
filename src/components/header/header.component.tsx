import * as React from 'react';

import { BioHeader } from 'elements';
import * as style from './header.style';

export class Header extends React.Component {
  private text = 'Sample text';

  public render(): JSX.Element {
    return (
      <div className={style.container}>
        <BioHeader base-path={COMPONENTS.BASE_URL}>
          {`${this.text}, with a twist...`}
        </BioHeader>
      </div>
    );
  }
}
