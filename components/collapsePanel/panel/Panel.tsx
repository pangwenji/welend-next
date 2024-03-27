import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  header: React.ReactElement<HTMLOptionElement>;
  selectedValues?: string[];
  value?: string;
  onItemClick?: (value: string, open: boolean) => void;
  /// @ts-ignore
  openIcon?: Icon;
  /// @ts-ignore
  closeIcon?: Icon;
  "data-cta-name"?: string;
}

const Panel: React.SFC<Props> = ({
  theme,
  header,
  value,
  children,
  onItemClick,
  selectedValues,
  openIcon,
  closeIcon,
  className,
  "data-cta-name": dataCtaName,
  ...props
}: Props) => {
  const { PanelTheme } = theme;
  const isOpen = selectedValues && value && selectedValues.includes(value);
  const panelOpenIcon = openIcon || null;
  const panelCloseIcon = closeIcon || null;

  const renderContent = () => {
    if (isOpen) {
      return (
        <div
          className={cx(css`
            padding-top: ${PanelTheme.contentPaddingTop};
            padding-bottom: ${PanelTheme.contentPaddingBottom};
            padding-left: ${PanelTheme.contentPaddingLeft};
            padding-right: ${PanelTheme.contentPaddingRight};
          `)}
        >
          {children}
        </div>
      );
    }
    return null;
  };

  const handleClick = () => {
    if (value && onItemClick && onItemClick) {
      onItemClick(value, !(value && selectedValues && selectedValues.includes(value)));
    }
  };

  return (
    <div
      className={cx(css`
        width: 100%;
        background-color: ${PanelTheme.backgroundColor};
        box-shadow: ${PanelTheme.boxShadow};
        border-radius: ${PanelTheme.borderRadius};
        overflow: auto;
        margin-bottom: ${PanelTheme.marginBottom};
        position: relative;
      `, className)}
      data-cta-name={dataCtaName}
    >
      <div
        className={cx(css`
          padding-top: ${PanelTheme.headerPaddingTop};
          padding-bottom: ${PanelTheme.headerPaddingBottom};
          padding-left: ${PanelTheme.headerPaddingLeft};
          padding-right: ${PanelTheme.headerPaddingRight};
          cursor: pointer;
        `)}
        onClick={handleClick}
      >
        {header}
        <div
          className={cx(css`
            position: absolute;
            top: ${PanelTheme.iconPositionTop};
            right: ${PanelTheme.iconPositionRight};
          `)}
        >
          {isOpen ? panelOpenIcon : panelCloseIcon}
        </div>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default withTheme(Panel);
