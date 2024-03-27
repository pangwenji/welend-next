import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";
import { Badge } from "../../badge";
import { CameraIcon, IconSize } from "../../icon";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, InjectedThemeProps {
  numberOfUploads: number;
  onUpload?: (file: File) => void;
}

class UploadButton extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    const { numberOfUploads, className, children, theme, onChange, onUpload, ...props } = this.props;
    const { InputTheme, UploadButtonTheme } = theme;
    const badge = numberOfUploads ? (
      <Badge
        className={css`
          position: absolute;
          top: 50%;
          right: ${UploadButtonTheme.paddingRight};
          transform: translateY(-50%);
        `}
      >
        {numberOfUploads}
      </Badge>
    ) : null;

    return (
      <div
        className={cx(css`
          position: relative;
          padding-top: ${UploadButtonTheme.paddingTop};
          padding-bottom: ${UploadButtonTheme.paddingBottom};
          border-width: 2px;
          border-style: solid;
          border-color: ${UploadButtonTheme.color};
          border-radius: ${InputTheme.borderRadius};
          color: ${UploadButtonTheme.color};
          text-align: center;
        `, className)}
      >
        <CameraIcon
          className={css`
            position: absolute;
            top: 50%;
            left: ${UploadButtonTheme.paddingLeft};
            transform: translateY(-50%);
          `}
          size={IconSize.large}
          color={UploadButtonTheme.color}
        />
        {children}
        <input
          type="file"
          className={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
          `}
          onChange={this.handleChange}
          {...props}
        />
        {badge}
      </div>
    );
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onUpload && event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.props.onUpload(file);
    }
  }
}

export default withTheme(UploadButton);
