import { css, cx } from "emotion";
import * as moment from "moment";
import "rc-slider/assets/index.css";
import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import { ClockStyle, FlipClockWrapper, TimerIcon } from "../../components";
import { PromotionBanner as PromotionBannerInfo } from "../../lib/AppConfig";
import { AppProps } from "../../pages/_app";
import { ImmutableRootState } from "../../reducers";
import CountdownTimerStyle from "./CountdownTimerStyle";

interface State extends ClockStyle {
  dayTens: number;
  dayTensFlip: boolean;
  dayUnits: number;
  dayUnitsFlip: boolean;
  hoursTens: number;
  hoursTensFlip: boolean;
  hoursUnits: number;
  hoursUnitsFlip: boolean;
  minutesTens: number;
  minutesTensFlip: boolean;
  minutesUnits: number;
  minutesUnitsFlip: boolean;
  secondsTens: number;
  secondsTensFlip: boolean;
  secondsUnits: number;
  secondsUnitsFlip: boolean;
  currentTime: string;
}

interface StateProps {
}

interface OwnProps {
  promotionOffer: PromotionBannerInfo;
}

interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class CountdownTimer extends React.Component<Props, State> {
  public timer;

  constructor(props: Props) {
    super(props);
    this.state = {
      dayTens: 0,
      dayTensFlip: true,
      dayUnits: 0,
      dayUnitsFlip: true,
      hoursTens: 0,
      hoursTensFlip: true,
      hoursUnits: 0,
      hoursUnitsFlip: true,
      minutesTens: 0,
      minutesTensFlip: true,
      minutesUnits: 0,
      minutesUnitsFlip: true,
      secondsTens: 0,
      secondsTensFlip: true,
      secondsUnits: 0,
      secondsUnitsFlip: true,
      clockSize: {
        clockHeight: 40,
        clockWidth: 35,
      },
      currentTime: "",
    };

    this.updateCountdownTime = this.updateCountdownTime.bind(this);
    this.getMomentTenUnits = this.getMomentTenUnits.bind(this);
    this.renderTimer = this.renderTimer.bind(this);
  }

  public componentDidMount(): any {
    this.timer = setInterval(() => {
      const currentTime = moment().add(1, "seconds").utc().format();
      this.setState({currentTime});
      this.updateCountdownTime();
    }, 1000);
  }

  public componentWillUnmount(): any {
    clearInterval(this.timer);
  }

  public render(): any {
    return this.renderTimer();
  }

  private renderTimer(): any {
    const { t, theme, promotionOffer } = this.props;
    const { dayTens, dayTensFlip, dayUnits, dayUnitsFlip, hoursTens, hoursTensFlip, hoursUnits, hoursUnitsFlip, minutesTens, minutesTensFlip, minutesUnits, minutesUnitsFlip, secondsTens, secondsTensFlip, secondsUnits, secondsUnitsFlip, clockSize } = this.state;
    const { timerBackground } = promotionOffer;
    const style = CountdownTimerStyle(theme);
    return (
      <div
        className={cx(style.mainContainer, css`
          background-image: url(${timerBackground})
        `)}
      >
        <div className={cx(style.descriptionContainer)}><TimerIcon style={{ color: "white" }} /><span className={cx(style.descriptionText)}>{t("common:countdown-timer:description")}</span></div>
        <div style={{backgroundColor: "rgba(255,255,255,0.4)", padding: "3px", borderRadius: "2px", display: "inline-block", height: "45px"}}>
          <div className={cx(style.timeGroup)}>
            <FlipClockWrapper clockSize={clockSize} digit={dayTens} flip={dayTensFlip} />
            <FlipClockWrapper clockSize={clockSize} digit={dayUnits} flip={dayUnitsFlip} />
            <div className={cx(style.timeGroupUnitText)}><span className="block">{t("common:countdown-timer:units:day")}</span></div>
          </div>
          <div className={cx(style.timeGroup)}>
            <FlipClockWrapper clockSize={clockSize} digit={hoursTens} flip={hoursTensFlip} />
            <FlipClockWrapper clockSize={clockSize} digit={hoursUnits} flip={hoursUnitsFlip} />
            <div className={cx(style.timeGroupUnitText)}><span className="block">{t("common:countdown-timer:units:hour")}</span></div>
          </div>
          <div className={cx(style.timeGroup)}>
            <FlipClockWrapper clockSize={clockSize} digit={minutesTens} flip={minutesTensFlip} />
            <FlipClockWrapper clockSize={clockSize} digit={minutesUnits} flip={minutesUnitsFlip} />
            <div className={cx(style.timeGroupUnitText)}><span className="block">{t("common:countdown-timer:units:minute")}</span></div>
          </div>
          <div className={cx(style.timeGroup)} style={{marginRight: 0}} >
            <FlipClockWrapper clockSize={clockSize} digit={secondsTens} flip={secondsTensFlip} />
            <FlipClockWrapper clockSize={clockSize} digit={secondsUnits} flip={secondsUnitsFlip} />
            <div className={cx(style.timeGroupUnitText)}><span className="block">{t("common:countdown-timer:units:second")}</span></div>
          </div>
        </div>
      </div>
    );
  }

  private updateCountdownTime(): any {
    const { currentTime } = this.state;
    const { promotionOffer } = this.props;
    const { endDatetime } = promotionOffer;
    const duration = moment.duration(moment(endDatetime).diff(moment(currentTime)));
    if (Number(duration) < 0) {
      return;
    }
    const dayTens = this.getMomentTenUnits(duration.get("days"))[0];
    const dayUnits = this.getMomentTenUnits(duration.get("days"))[1];
    const hoursTens = this.getMomentTenUnits(duration.get("hours"))[0];
    const hoursUnits = this.getMomentTenUnits(duration.get("hours"))[1];
    const minutesTens = this.getMomentTenUnits(duration.get("minutes"))[0];
    const minutesUnits = this.getMomentTenUnits(duration.get("minutes"))[1];
    const secondsTens = this.getMomentTenUnits(duration.get("seconds"))[0];
    const secondsUnits = this.getMomentTenUnits(duration.get("seconds"))[1];
    let timeChange = {};
    if (dayTens !== this.state.dayTens) {
      timeChange = {
        ...timeChange,
        dayTens,
        dayTensFlip: !this.state.dayTensFlip,
      };
    }
    if (dayUnits !== this.state.dayUnits) {
      timeChange = {
        ...timeChange,
        dayUnits,
        dayUnitsFlip: !this.state.dayUnitsFlip,
      };
    }
    if (hoursTens !== this.state.hoursTens) {
      timeChange = {
        ...timeChange,
        hoursTens,
        hoursTensFlip: !this.state.hoursTensFlip,
      };
    }
    if (hoursUnits !== this.state.hoursUnits) {
      timeChange = {
        ...timeChange,
        hoursUnits,
        hoursUnitsFlip: !this.state.hoursUnitsFlip,
      };
    }
    if (minutesTens !== this.state.minutesTens) {
      timeChange = {
        ...timeChange,
        minutesTens,
        minutesTensFlip: !this.state.minutesTensFlip,
      };
    }
    if (minutesUnits !== this.state.minutesUnits) {
      timeChange = {
        ...timeChange,
        minutesUnits,
        minutesUnitsFlip: !this.state.minutesUnitsFlip,
      };
    }
    if (secondsTens !== this.state.secondsTens) {
      timeChange = {
        ...timeChange,
        secondsTens,
        secondsTensFlip: !this.state.secondsTensFlip,
      };
    }
    this.setState({
      ...timeChange,
      secondsUnits,
      secondsUnitsFlip: !this.state.secondsUnitsFlip,
    });
  }

  private getMomentTenUnits(duration): number[] {
    const diff = duration / 10;
    return [ Math.floor(diff), Math.ceil((diff * 10 - Math.floor(diff) * 10))];
  }
}

export default connect(null, null)(CountdownTimer);
