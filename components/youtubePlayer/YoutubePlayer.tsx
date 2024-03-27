import { css } from "emotion";
import * as React from "react";
import Iframe from "../iframe";

interface Props extends React.HTMLProps<HTMLDivElement> {
  autoPlay?: boolean;
  controls?: boolean;
  rel?: string;
  modest?: string;
  mute?: boolean;
  videoId: string;
  showinfo?: boolean;
  styles?: React.CSSProperties;
}

const YoutubePlayer: React.SFC<Props> = ({ autoPlay, controls, mute, rel, modest, videoId, showinfo, styles }: Props) => {
  const configs = [];
  if (autoPlay) {
    configs.push("autoplay=1");
  }
  if (controls) {
    configs.push("controls=1");
  }
  if (mute) {
    configs.push("mute=1");
  }
  if (rel) {
    configs.push("rel=1");
  }
  if (modest) {
    configs.push("modest=1");
  }
  if (showinfo) {
    configs.push("showinfo=1");
  }
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
        src={`https://www.youtube.com/embed/${videoId}?${configs.join("&")}`}
        scrolling="no"
        allowFullScreen={true}
      />
    </div>
  );
};

export default YoutubePlayer;
