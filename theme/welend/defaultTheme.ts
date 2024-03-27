import MixinTheme from "../MixinTheme";
import Theme from "../theme";
import Colors from "./Colors";
import Config from "./Config";
import Fonts from "./Fonts";
import Metrics from "./Metrics";

const mixin = new MixinTheme(Colors, Fonts, Metrics);

const defaultTheme: Theme = {
  ...mixin.metricsStyles(),
  ...mixin.fontStyles(),
  Config,
  Colors: mixin.Colors,
  Metrics: mixin.Metrics,
  BadgeTheme: {
    size: Metrics.large,
    backgroundColor: Colors.secondary,
    color: Colors.white,
    fontSize: Fonts.small.fontSize,
    fontWeight: Fonts.small.fontWeight,
  },
  BaseButtonTheme: {
    normalHeight: "3.65rem",
    largeHeight: "4.93rem",
    borderRadius: Metrics.tiny,
    fontSize: Fonts.title.fontSize,
    fontWeight: Fonts.title.fontWeight,
    disabled: {
      color: Colors.lightContentText,
      backgroundColor: Colors.lightGray,
    },
  },
  CardBannerMainTitleTheme: {
    fontSize: Fonts.largeTitle.fontSize,
    fontWeight: Fonts.largeTitle.fontWeight,
  },
  CardBannerTextTheme: {
    fontSize: Fonts.subtitle.fontSize,
    fontWeight: Fonts.subtitle.fontWeight,
  },
  CardBannerTheme: {
    paddingLeft: Metrics.medium,
    paddingRight: Metrics.medium,
    color: Colors.white,
  },
  CardBannerTitleTheme: {
    fontSize: Fonts.mainTitle.fontSize,
    fontWeight: Fonts.mainTitle.fontWeight,
  },
  CardTheme: {
    backgroundColor: Colors.white,
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: Metrics.tiny,
  },
  CardContentTheme: {
    paddingTop: Metrics.xl,
    paddingBottom: Metrics.xl,
    paddingLeft: Metrics.large,
    paddingRight: Metrics.large,
  },
  CardHeaderTheme: {
    marginTop: Metrics.xl,
  },
  CardTitleTheme: {
    paddingLeft: Metrics.base,
    paddingRight: Metrics.base,
    borderWidth: Metrics.small,
    borderColor: Colors.primary,
    color: Colors.primary,
    fontSize: Fonts.mainTitle.fontSize,
    fontWeight: Fonts.mainTitle.fontWeight,
  },
  CheckboxTheme: {
    borderColor: Colors.secondary,
    checkedBackgroundColor: Colors.secondary,
    uncheckedBackgroundColor: Colors.white,
  },
  CircleIconTheme: {
    padding: Metrics.medium,
    backgroundColor: Colors.primary,
    color: Colors.white,
  },
  ContentTheme: {
    padding: Metrics.base,
    backgroundColor: Colors.contentBackground,
  },
  FieldErrorTheme: {
    marginTop: Metrics.tiny,
    color: Colors.errorText,
    fontSize: Fonts.errorMessage.fontSize,
    fontWeight: Fonts.errorMessage.fontWeight,
  },
  FormFieldTheme: {
    labelMarginBottom: Metrics.medium,
    iconMarginRight: Metrics.medium,
  },
  FormLabelTheme: {
    fontSize: Fonts.normal.fontSize,
    fontWeight: Fonts.normal.fontWeight,
  },
  GridTheme: {
    gutter: Metrics.medium,
  },
  LightButtonTheme: {
    paddingTop: Metrics.medium,
    paddingRight: Metrics.base,
    paddingBottom: Metrics.medium,
    paddingLeft: Metrics.base,
    fontSize: Fonts.small.fontSize,
    fontWeight: Fonts.small.fontWeight,
    borderColor: Colors.secondary,
    color: Colors.secondary,
    backgroundColor: Colors.white,
  },
  ListTheme: {
    paddingTop: Metrics.xl,
    paddingBottom: Metrics.xl,
    paddingLeft: Metrics.large,
    paddingRight: Metrics.large,
    borderColor: Colors.lightGray,
  },
  IconTheme: {
    small: "20px",
    medium: "22px",
    large: "34px",
    xl: "40px",
    color: Colors.icon,
  },
  ImageSliderTheme: {
    imageMargin: Metrics.medium,
  },
  ImageThumbnailTheme: {
    size: "3.65rem",
    borderRadius: Metrics.tiny,
  },
  InputTheme: {
    height: "3.466rem",
    paddingLeft: Metrics.medium,
    paddingRight: Metrics.medium,
    borderRadius: Metrics.tiny,
    borderColor: Colors.lightGray,
    fontSize: Fonts.input.fontSize,
    fontWeight: Fonts.input.fontWeight,
    color: Colors.secondary,
    backgroundColor: Colors.white,
    focus: {
      borderColor: Colors.secondary,
    },
    placeholder: {
      color: Colors.lightGray,
    },
    disabled: {
      color: Colors.lightContentText,
      backgroundColor: Colors.lightGray,
    },
  },
  ModalTheme: {
    background: "rgba(0, 0, 0, 0.6)",
  },
  ModalCardTheme: {
    top: "4rem",
    right: Metrics.base,
    bottom: Metrics.base,
    left: Metrics.base,
  },
  ModalContentTheme: {
    paddingTop: Metrics.xl,
    paddingBottom: Metrics.xl,
    paddingLeft: Metrics.large,
    paddingRight: Metrics.large,
  },
  ModalHeaderTheme: {
    paddingRight: "3.5rem",
    marginTop: Metrics.xl,
    closeIconMarginTop: Metrics.xl,
    closeIconMarginRight: "1rem",
    closeIconColor: Colors.primary,
  },
  ModalTitleTheme: {
    paddingLeft: Metrics.base,
    paddingRight: Metrics.base,
    borderWidth: Metrics.small,
    borderColor: Colors.primary,
    color: Colors.primary,
    fontSize: Fonts.mainTitle.fontSize,
    fontWeight: Fonts.mainTitle.fontWeight,
  },
  MultipleChoiceButtonTheme : {
    paddingTop: Metrics.base,
    paddingBottom: Metrics.base,
    paddingLeft: Metrics.medium,
    paddingRight: Metrics.medium,
    fontSize: Fonts.subtitle.fontSize,
    fontWeight: Fonts.subtitle.fontWeight,
    backgroundColor: Colors.white,
    selectedColor: Colors.secondary,
    unselectedColor: Colors.lightGray,
  },
  MultipleChoiceGroupTheme: {
    marginBottom: Metrics.small,
  },
  OrderedListTheme: {
    color: Colors.text,
    paddingLeft: "2.33rem",
    listMarginBottom: Metrics.base,
    fontSize: Fonts.small.fontSize,
    fontWeight: Fonts.small.fontWeight,
    badgeBackgroundColor: Colors.primary,
    badgeTextColor: Colors.white,
  },
  PinInputTheme: {
    selectedColor: Colors.secondary,
    unselectedColor: Colors.lightGray,
  },
  PrimaryButtonTheme: {
    backgroundColor: Colors.primary,
    color: Colors.white,
  },
  RadioButtonTheme: {
    paddingTop: Metrics.base,
    paddingBottom: Metrics.base,
    checkedBackgroundColor: Colors.secondary,
    uncheckedBackgroundColor: Colors.white,
    checkedColor: Colors.white,
    uncheckedColor: Colors.lightGray,
    checkedBorderColor: Colors.secondary,
    uncheckedBorderColor: Colors.lightGray,
  },
  SecondaryButtonTheme: {
    backgroundColor: Colors.secondary,
    color: Colors.white,
  },
  SelectTheme: {
    bulletColor: Colors.lightGray,
    fontSize: Fonts.small.fontSize,
    fontWeight: Fonts.small.fontWeight,
  },
  TextAreaTheme: {
    paddingTop: Metrics.base,
    paddingBottom: Metrics.base,
  },
  TypographyTheme: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    color: Colors.text,
  },
  FooterTheme: {
    backgroundColor: Colors.footerBackground,
    footerTextColor: Colors.white,
    footerContentColor: Colors.footerContentColor,
    footerBottomBorderTop: `1px solid #323232`,
  },
  UnorderedListTheme: {
    color: Colors.lightContentText,
    paddingLeft: Metrics.base,
    listMarginBottom: Metrics.small,
    fontSize: Fonts.small.fontSize,
    fontWeight: Fonts.small.fontWeight,
  },
  UploadButtonTheme: {
    paddingTop: Metrics.base,
    paddingBottom: Metrics.base,
    paddingLeft: Metrics.large,
    paddingRight: Metrics.large,
    color: Colors.secondary,
  },
  PdfViewTheme: {
    backgroundColor: Colors.primary,
    bottom: Metrics.base,
    right: Metrics.base,
  },
  PanelTheme: {
    backgroundColor: Colors.white,
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: Metrics.tiny,
    headerPaddingTop: Metrics.large,
    headerPaddingBottom: Metrics.large,
    headerPaddingLeft: Metrics.large,
    headerPaddingRight: Metrics.large,
    contentPaddingTop: Metrics.large,
    contentPaddingBottom: Metrics.large,
    contentPaddingLeft: Metrics.large,
    contentPaddingRight: Metrics.large,
    iconPositionTop: "1rem",
    iconPositionRight: "1rem",
    marginBottom: Metrics.large,
  },
};

export default defaultTheme;
