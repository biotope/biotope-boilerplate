export interface XAccordionItemProps {
  heading: string;
  opened?: boolean;
  addBottomLine?: boolean;
}

export interface XAccordionItemRenderProps extends XAccordionItemProps {
  events: {
    togglePanel: Function;
  };
}
