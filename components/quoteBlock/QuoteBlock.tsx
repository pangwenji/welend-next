import { css, cx } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";
import QuoteBlockStyle from "./QuoteBlockStyle";

interface OwnProps extends React.HTMLProps<HTMLDivElement>  {
    quote: string;
    content?: string;
    remark?: string;
}

interface State {}

export type Props = OwnProps & InjectedThemeProps;

class QuoteBlock extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const { theme, quote, content, remark } = this.props;
        const style = QuoteBlockStyle(theme, this.props);

        return (
            <div className={cx("quote-block", style.quoteBlock)}>
                <div className={cx(style.quoteContainer)}>
                    <div className={cx(style.quoteBorderWrapper)}>
                        <div className={cx(style.quote)}><span className={"quote-left"}/>{quote}<span className={"quote-right"}/></div>
                        {content ? <div className={cx(style.content)}>{content}</div> : null}
                    </div>
                </div>
                {remark ? <div className={cx("text-color-light", style.remarkContent)} dangerouslySetInnerHTML={{__html: remark}}/> : null}
            </div>
        );
    }
}

export default withTheme(QuoteBlock);
