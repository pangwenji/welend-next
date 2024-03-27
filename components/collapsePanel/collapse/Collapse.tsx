import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  defaultValues?: string[] | string;
  accordion: boolean;
  /// @ts-ignore
  openIcon?: Icon;
  /// @ts-ignore
  closeIcon?: Icon;
}

interface State {
  selectedValues: string[];
}

class Collapse extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const defaultValues: string[] = !props.defaultValues ? [] : (Array.isArray(props.defaultValues) ? props.defaultValues : [props.defaultValues]);

    this.state = {
      selectedValues: props.accordion ? [defaultValues[0]] : defaultValues,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    const { selectedValues } = this.state;
    const { openIcon, closeIcon } = this.props;
    const newChildren: Array<React.ReactElement<HTMLOptionElement>> = [];
    React.Children.forEach(this.props.children, (child: React.ReactElement<HTMLOptionElement>, index: number) => {
      if (!child) { return; }
      const props = {
        selectedValues,
        value: String(index),
        onItemClick: this.handleClick,
        openIcon,
        closeIcon,
        key: child.key || String(index),
        ...child.props,
      };
      newChildren.push(React.cloneElement(child, props));
    });
    return (
      <React.Fragment>
        {newChildren}
      </React.Fragment>
    );
  }

  private handleClick(value: string, open: boolean) {
    const { accordion } = this.props;
    let selectedValues: string[] = [];
    if (open) {
      if (accordion) {
        selectedValues = [value];
      } else {
        selectedValues = this.state.selectedValues;
        if (!selectedValues.includes(value)) { selectedValues.push(value); }
      }
    } else {
      if (accordion) {
        selectedValues = [];
      } else {
        selectedValues = this.state.selectedValues;
        const index = selectedValues.indexOf(value);
        if (index > -1) { selectedValues.splice(index, 1); }
      }
    }

    this.setState({
      selectedValues,
    });
  }
}

export default withTheme(Collapse);
