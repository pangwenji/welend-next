import { css } from "emotion";
import * as React from "react";
import Iframe from "../iframe";

interface Props extends React.HTMLProps<HTMLDivElement> {
  url: string;
  showinfo?: boolean;
  autoPlay?: boolean;
  styles?: React.CSSProperties;
}

const YoutubePlayer: React.SFC<Props> = ({ autoPlay, showinfo, url }: Props) => {
  const configs = [];
  configs.push(`show_text=${showinfo ? "1" : "0"}`);
  configs.push(`autoplay=${autoPlay ? "1" : "0"}`);
  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
      `}
    >
      <Iframe
        className={css`
          border: none;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        `}
        // tslint:disable-next-line:max-line-length
        src={`https://www.facebook.com/plugins/video.php?href=${decodeURIComponent(url)}&${configs.join("&")}`}
        scrolling="no"
        allowFullScreen={true}
      />
    </div>
  );
};

export default YoutubePlayer;
