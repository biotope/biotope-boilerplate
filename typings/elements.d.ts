
declare interface ElementProps<E = HTMLElement> {
  children?: Readonly<React.ReactNode>;
  class?: string;
  ref?: React.RefObject<E>;
}

declare interface ReactElementProps<E = HTMLElement> {
  children?: Readonly<React.ReactNode>;
  className?: string;
  elemRef?: React.RefObject<E>;
}

declare interface BioHeaderProps {
  'base-path'?: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    'bio-header': BioHeaderProps & ElementProps;
  }
}
