import * as React from 'react';

import { LoadService } from 'services';

export abstract class BaseComponent<P> extends React.Component<P & ReactElementProps> {
  protected static componentName: string;

  public componentDidMount(): void {
    LoadService.loadComponent(COMPONENTS.CORE_MODULE_NAME);
    if ((this.constructor as typeof BaseComponent).componentName) {
      LoadService.loadComponent((this.constructor as typeof BaseComponent).componentName);
    }
  }

  public render(): JSX.Element {
    const { className, elemRef, ...otherProps } = this.props;

    return this.buildComponent({
      class: className,
      ref: elemRef,
      ...(otherProps as P),
    });
  }

  protected abstract buildComponent(props: P & ElementProps): JSX.Element;
}
