import { css } from "emotion";
import Theme from "../../theme/theme";

const PRODUCT_MENU_COUNT = 4;
const MAIN_MENU_WIDTH = 120;
const SUB_MENU_HEIGHT = 50;
const SUB_MENU_WIDTH = 200;
const HEADER_HEIGHT_MOBILE = 50;
const HEADER_HEIGHT_DESKTOP = 70;
const MENU_HEIGHT_MOBILE = 300;
const MENU_WIDTH_MOBILE = 250;
const MENU_SECTION_COUNT = 4;

const styles = (theme: Theme) => {
  return {
    placeholder: css`
      width: 100%;
      height: ${HEADER_HEIGHT_MOBILE}px;
      display: block;
      background-color: #fff;
      opacity: 0;
      @media (min-width: ${theme.Config.tabletWidth + 1}px) {
        height: ${HEADER_HEIGHT_DESKTOP}px;
      }
    `,
    base: css`
      width: 100%;
      height: ${HEADER_HEIGHT_MOBILE}px;
      line-height: ${HEADER_HEIGHT_MOBILE}px;
      position: fixed;
      top: 0;
      background-color: ${theme.Colors.white};
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
      transition: height 0.3s;
      z-index: 2;
      &.active {
        height: ${HEADER_HEIGHT_MOBILE + MENU_HEIGHT_MOBILE}px;
      }
      @media (max-width: ${theme.Config.tabletWidth + 1}px) {
        overflow: hidden;
      }
      @media (min-width: ${theme.Config.tabletWidth + 1}px) {
        height: ${HEADER_HEIGHT_DESKTOP}px;
        line-height: ${HEADER_HEIGHT_DESKTOP}px;
      }
    `,
    mobile: {
      hidden: css`
        display: none;
      `,
      container: css`
        width: 100%;
        height: 100%;
        position: relative;
        padding: 0 10px;
        @media (min-width: ${theme.Config.tabletWidth + 1}px) {
          display: none;
        }
        .icon, .icon:before, .icon:after, .icon i, .icon i:before, .icon i:after {
          transition: all 0.4s ease;
        }

        .menu-button {
          position: absolute;
          right: 0px;
          top: 15px;
          cursor: pointer;
          background: #fff;
          width: 40px;
          height: 30px;
        }

        .menu-icon {
          color: ${theme.Colors.primary};
          position: absolute;
          width: 20px;
          height: 2px;
          top: 10px;
          background-color: currentColor;
        }
        .menu-icon:before {
          content: '';
          position: absolute;
          top: -7px;
          left: 0;
          width: 20px;
          height: 2px;
          background-color: currentColor;
        }
        .menu-icon:after {
          content: '';
          position: absolute;
          top: 7px;
          left: 0;
          width: 20px;
          height: 2px;
          background-color: currentColor;
        }

        .close-icon {
          color: ${theme.Colors.primary};
          position: absolute;
          margin-top: 0;
          margin-left: 0;
          width: 20px;
          height: 20px;
        }
        .close-icon:before {
          content: '';
          position: absolute;
          top: 10px;
          width: 20px;
          height: 2px;
          background-color: currentColor;
          -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
        }
        .close-icon:after {
          content: '';
          position: absolute;
          top: 10px;
          width: 20px;
          height: 2px;
          background-color: currentColor;
          -webkit-transform: rotate(45deg);
                  transform: rotate(45deg);
        }
      `,
      content: css`
        width: calc(100% + 40px);
        left: 10px;
        position: absolute;
        transition: left 0.3s;
        &.active {
          left: -95px;
        }
      `,
      logo: css`
        height: 30px;
        margin-top: 10px;
      `,
      menu: css`
        position: absolute;
        top: 0;
        right: 5px;
        color: ${theme.Colors.primary};
        transition: left 0.3s;
        &>* {
          float: left;
        }
        &.active {
          position: absolute;
          left: 100px;
          top: 0;
        }
      `,
      itemContainer: css`
        width: 95%;
        position: absolute;
        left: 2.5%;
        top: ${HEADER_HEIGHT_MOBILE}px;
        overflow-y: hidden;
        border-top: 1px solid #ccc;
        ::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }
        ::-webkit-scrollbar-track {
          background: #ccc;
        }
        ::-webkit-scrollbar-thumb {
            background: ${theme.Colors.secondary};
        }
      `,
      menuItems: css`
        width: ${MENU_WIDTH_MOBILE * MENU_SECTION_COUNT}px;
        ul {
          width: ${MENU_WIDTH_MOBILE - 1}px;
          float: left;
          margin: 20px 0 10px 0;
          padding-left: 15px;
          list-style: none;
          position: relative;
          line-height: 40px;
          &::after {
            content: ' ';
            width: 2px;
            height: ${MENU_HEIGHT_MOBILE - 60}px;
            background: #ccc;
            display: inline-block;
            position: absolute;
            right: 0;
            top: 0;
            opacity: 0.6;
          }
          &:last-child {
            &::after {
              display: none;
            }
          }
          li {
            color: ${theme.Colors.primary};
            &:first-child {
              font-size: 0.8em;
              color: #666;
            }
          }
        }
      `,
      item: css`
        display: inline-block;
        width: 80px;
        text-align: center;
        &.lang {
          width: 50px;
        }
        &.multi-line {
          line-height: 15px;
          padding-top: ${(HEADER_HEIGHT_MOBILE - 30) / 2}px;
          padding-bottom: ${(HEADER_HEIGHT_MOBILE - 30) / 2}px;
        }
      `,
      applyButton: css`
        font-size: 0.8rem;
        height: 2rem;
        width: 75%;
      `,
    },
    desktop: {
      container: css`
      width: 100%;
      height: 100%;
      max-width: ${theme.Config.siteContainerWidth}px;
      margin: auto;
      position: relative;
      ul {
        list-style: none;
        padding: 0;
      }
      @media (max-width: ${theme.Config.tabletWidth}px) {
        display: none;
      }
    `,
      logo: css`
      width: 122px;
      margin-top: 10px;
    `,
      menu: css`
      text-align: center;
      height: ${HEADER_HEIGHT_DESKTOP}px;
      padding-left: 0;
      margin: 0;
      display: inline-block;
      position: absolute;
      margin-left: 20px;
      a {
        position: relative;
      }
      .button {
        height: 40px;
      }
      &.right {
        position: absolute;
        right: 0;
      }
      &>li {
        position: relative;
        float: left;
        >ul {
          display: none;
          z-index: 1;
          > li {
            &:nth-child(3) > ul {
              top: -${SUB_MENU_HEIGHT * 2}px;
            }
          }
        }
        ul {
          position: absolute;
          width: ${SUB_MENU_WIDTH}px;
          text-align: left;
          background-color: ${theme.Colors.primary};
          color: ${theme.Colors.white};
          > li {
            padding-left: 20px;
            position: relative;
            height: ${SUB_MENU_HEIGHT}px;
            // line-height: ${SUB_MENU_HEIGHT}px;
            line-height: normal;
            > ul {
              position: absolute;
              opacity: 0;
              left: ${SUB_MENU_WIDTH}px;
              transition: all 0.3s;
            }
            > a {
              position: absolute;
              top: 0;
              bottom: 0;
              width: auto;
              left: 20px;
              right: 20px;
              > span {
                position: absolute;
                transform: translateY(-50%);
                top: 50%;
              }
            }
          }
          &.productMenu {
            height: auto;
          }
        }
        &:hover {
          >ul {
            display: block;
            >li:nth-child(3) {
              &:hover {
                >ul {
                  opacity: 1;
                }
              }
            }
          }
          }
        }
        .item {
          display: inline-block;
          color: #666;
          width: ${MAIN_MENU_WIDTH}px;
          &.multi-line {
            line-height: 25px;
            margin-top: ${(HEADER_HEIGHT_DESKTOP - 50) / 2}px;
            padding-bottom: ${(HEADER_HEIGHT_DESKTOP - 50) / 2}px;
          }
        }
      }
    `,
    },
    underlineAnimation: css`
      position: relative;
      &::after {
        content: " ";
        width: 0;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 0.3s;
        background: #026bb5;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    `,
    backgroundAnimation: css`
      position: relative;
      &::before {
        content: " ";
        width: 0;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 0.3s;
        background: rgba(255, 255, 255, 0.15);
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    `,
  };
};

export default styles;
