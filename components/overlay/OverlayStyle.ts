import { css, cx } from "emotion";
import Theme from "../../theme/theme";
import { Props } from "./Overlay";

const styles = (theme: Theme, props: Props) => {
  return {
    mainContainer: cx("popup-overlay-container", css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,0.8);
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 40px;
      z-index: 4;
    `),
    contentArea: cx("popup-content-area", css`
      position: relative;
      padding: 40px;
      width: 100%;
      height: 100%;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding: 30px 20px 20px 20px;
      }
    `),
    contentContainer: cx("popup-content-container", css(`
      margin: 0 auto;
      height: 100%;
      padding: 0 20px;
      ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }
      ::-webkit-scrollbar-track {
        background: transparent
      }
      ::-webkit-scrollbar-thumb {
        background: transparent;
      }
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding: 0;
      }
    `)),
    centralise: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };
};

export default styles;
