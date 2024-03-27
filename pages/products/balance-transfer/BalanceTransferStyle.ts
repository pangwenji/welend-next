import { css } from "emotion";
import bottomBkg from "../../../assets/images/static-page/nodoc-bkg@2x.jpg";
import Theme from "../../../theme/theme";

const styles = (theme: Theme) => {
  return {
    bottomSection: css`
      width: 100%;
      padding: 120px 20px 60px;
      background-color: ${theme.Colors.white};
      position: relative;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding: 30px;
      }
    `,
    promotionalContainer: css`
      width: 100%;
      margin: auto;
      padding:120px 20px 60px;
      @media (max-width: ${theme.Config.tabletWidth}px) {
        padding-top: 30px;
      }
      .slick-dots1{
        position: absolute;
        bottom: -25px;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
        li{
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
          &.slick-active{
            button{
              &:before{
                color: #F28021;
                border-radius: 5px;
              }
            }
          }
          button{
            font-size: 0;
            line-height: 0;
            display: block;
            width: 20px;
            height: 20px;
            padding: 5px;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: none;
            background: transparent;
            &:before{
              font-family: 'slick';
              font-size: 28px;
              line-height: 18px;
              position: absolute;
              top: 0;
              left: 0;
              width: 20px;
              height: 8px;
              content: '•';
              text-align: center;
              color: #CCCCCC;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            &:hover,&:focus{
              outline: none;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .slick-prev,.slick-next{display:none !important;}
    `,
    remarkContent: css`
    display: flex;
    justify-content: center;
    margin: 30px auto 0;
    `,
  };
};

export default styles;
