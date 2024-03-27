import { css, cx } from "emotion";
import * as React from "react";
import Layout from "../../containers/layout";

const articleStyle = css`
    max-width: 760px;
    padding: 0 35px;
    margin: 0 auto;
    h3, div {
        color: #444
    }
    h3 {
        font-size: 24px;
    }
    h1 {
        text-align: center;
        font-size: 36px;
        color: #026bb5;
        border-bottom: 5px solid #026bb5;
        padding-bottom: 5px;
    }
    div {
        font-size: 18px;
    }
    p {
        font-weight: 300;
    }
`;

const Declaration3Money = (props) => {
    const { router } = props;
    const { query } = router;
    const appEmbed = query.app_embed === "apps";
    const is3MoneyApp = query.t === "3money-app";
    return (
        <Layout
            {...props}
            metaTitle="WeLend - 3香港客戶聲明"
            metaPath="declaration-3money"
            hideWelabBot={true}
        >
            <article className={cx(articleStyle, !appEmbed && css`margin: 50px auto;`)}>
                {!is3MoneyApp && <h1>3香港客戶聲明</h1>}
                <h3>3香港客戶聲明</h3>
                <div><b>閱讀以下聲明。如果您同意所述項目，請選擇「同意」並繼續</b></div>
                <p>本人同意「和記電話有限公司」（「3香港」）可就本人曾向3香港提供之個人資料，包括：姓名、性別、香港身份証號碼、出生日期、電郵地址、郵寄地址、電話號碼、繳費狀況、3香港服務使用年期及戶口號碼（「本人個人資料」），向WeLend Limited （「WeLend」） 提供本人個人資料以便辦理本人之貸款申請（該「目的」）。</p>
                <p>本人明白此貸款申請乃本人與WeLend之交易。本人同意WeLend可根據WeLend的私隱政策條款，就該目的使用、披露、處理或保存本人個人資料。</p>
                <p>3Money App 為一電子手機貸款平台，由放債人WeLend營運。3香港為「3Money」之商標申請人。</p>
            </article>
        </Layout>
    );
};

export default Declaration3Money;
