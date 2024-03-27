import { css, cx } from "emotion";
import Theme from "../../theme/theme";
import { Props } from "./QuoteBlock";

const styles = (theme: Theme, props: Props) => {
    return {
        quoteBlock: css`
            background-color: ${theme.Colors.white};
            position: relative;
            text-align: center;
        `,
        quoteContainer: css`
            margin: 0 auto;
            max-width: 760px;
            position: relative;
            padding: 10px;
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to right, ${theme.Colors.secondary} 50%, ${theme.Colors.primary} 50%);
            }
            @media (max-width: ${theme.Config.tabletWidth}px){
                padding: 5px;
            }
        `,
        quoteBorderWrapper: css`
            position: relative;
            background-color: ${theme.Colors.white};
            padding: 80px 20px;
            @media (max-width: ${theme.Config.tabletWidth}px){
                padding: 40px 20px;
            }
        `,
        quote: css`
            position: relative;
            margin: 0 0 20px 0;
            padding: 0 40px;
            font-size: 1.7rem;
            @media (max-width: ${theme.Config.tabletWidth}px){
                font-size: 0.875rem;
                padding: 0;
            }
            .quote-left, .quote-right {
                position: absolute;
                transform: translateY(-50%);
                top: 50%;
                &:before {
                    font-size: 100px;
                    font-family: Helvetica;
                }
                @media (max-width: ${theme.Config.tabletWidth}px){
                    position: relative;
                    transform: translateY(0);
                    top: 0;
                    &:before {
                        font-size: 14px;
                        font-family: Helvetica;
                    }
                }
            }
            .quote-left {
                left: 0;
                &:before {
                    content: '\u201C';
                }
            }
            .quote-right {
                right: 0;
                &:before {
                    content: '\u201D';
                }
            }
        `,
        content: css`
            color: ${theme.Colors.primary};
            padding: 0 30px;
            &:before {
                content: '\u2014';
                padding-right: 5px;
            }
            @media (max-width: ${theme.Config.tabletWidth}px){
                font-size: 0.875rem;
                padding: 0;
            }
        `,
        remarkContent: css`
            margin-top: 20px;
        `,
    };
};

export default styles;
