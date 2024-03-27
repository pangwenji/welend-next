import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";
import PrimaryButton from "../button/primaryButton";
import { DownloadIcon } from "../icon";

interface Props extends React.HTMLProps<HTMLDivElement>, InjectedThemeProps {
  styles?: React.CSSProperties;
  pdfUrl?: string;
  className?: string;
}

const PdfView: React.SFC<Props> = ({ className, styles, pdfUrl, theme }: Props) => {

  const { PdfViewTheme } = theme;
  const download = () => {
    window.open(decodeURIComponent(pdfUrl));
  };

  return (
    <div
      className={cx(
        css`
        position: relative;
        height: 200px;`
        , className,
      )}
      style={{ ...styles }}
    >
      <iframe
        className={
          css`
          width: 100%;
          height: 100%;`
        }
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
      />
      <PrimaryButton
        className={css`
          position: absolute;
          width: 57px;
          bottom: ${PdfViewTheme.right};
          right: ${PdfViewTheme.right};
          line-height: "57px";
          box-shadow: 0 0 2px #000;
          border-radius: 4px;
        `}
        onClick={download}
      >
        <DownloadIcon color="#fff" style={{width: "20px"}} />
      </PrimaryButton>
    </div>
  );
};
export default withTheme(PdfView);
