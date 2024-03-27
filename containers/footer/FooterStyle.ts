import { css } from "emotion";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    mainContainer: css`
      position: relative;
      background-color: ${theme.Colors.footerBackground};
      padding: 10px 0 20px;
      .title {
        color: #CDE1F0;
        font-size: 1.2rem;
      }
    `,
    content: css`
      width: 100%;
      max-width: ${theme.Config.siteContainerWidth}px;
      margin: auto;
      color: #fff;
      padding-bottom: 40px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding: 20px;
      }
    `,
    menuItems: css`
      ul {
        width: 25%;
        list-style: none;
        display: inline-block;
        vertical-align: top;
        line-height: 40px;
        padding-left: 0;
        li {
          font-size: 0.9rem;
        }
        li:first-child {
          font-size: 1.2rem;
          opacity: 0.8;
        }
      }
      @media (max-width: ${theme.Config.tabletWidth}px) {
        display: none;
      }
    `,
    contactContainer: css``,
    statementContainer: css`
      color: #fff;
      border-top: 1px solid #fff;
      padding: 40px;
    `,
    caringLogoContainer: css`
      position: relative;
      height: auto;
      background-color: ${theme.Colors.white};
      `,
    caringLogoContent: css`
      max-width: ${theme.Config.siteContainerWidth}px;
      height: 100px;
      margin: 0 auto;
      text-align: right;
      @media (max-width: ${theme.Config.mobileWidth}px) {
        text-align: center;
        height: 70px;
      }
    `,
    caringLogoImage: css`
      height: 100%;
    `,
  };
};

export default styles;
