import { css, cx } from "emotion";
import * as React from "react";
import { CloseIcon, IconSize } from "../../components/icon";
import AppConfig from "../../lib/AppConfig";
import { AppProps } from "../../pages/_app";
import styleSheet from "./styleSheet";

type Props = AppProps;

const FraudAlert: React.FC<Props> = ({ t, theme, router }) => {
  const [alertActive, setAlertActive] = React.useState(false);
  const styles = styleSheet(theme);

  React.useEffect(() => {
    const active = AppConfig.fraudAlert.pages.some(
      (pages) => pages === router.pathname.split("/").pop(),
    );
    setAlertActive(active);
  }, [router.pathname]);

  const dismiss = () => setAlertActive(false);

  return alertActive ? (
    <div className={styles.fraudAlertContainer}>
      <div className={styles.messageContainer}>
        <CloseIcon
          className={styles.closeBtn}
          color="white"
          onClick={dismiss}
          size={IconSize.medium}
        />
        <span className={cx(styles.messageTitle, styles.messages)}>
          {t("common:important-notice")}
        </span>
        <span className={styles.messages} style={{display: "block"}} dangerouslySetInnerHTML={{ __html: t("common:fraud-alert") }} />
         <span className={styles.messages} dangerouslySetInnerHTML={{ __html: t("common:fraud-warning") }} />
      </div>
    </div>
  ) : null;
};

export default FraudAlert;
