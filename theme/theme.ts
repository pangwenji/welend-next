import { ColorsConfig, FontTheme, MetricsConfig, MetricsTheme } from "./MixinTheme";

export interface IconTheme {
  small: string;
  medium: string;
  large: string;
  xl: string;
  color?: string;
  fill?: {
    id: string;
    gradient: React.ReactElement<SVGLinearGradientElement>;
  };
}

export interface SiteConfig {
  siteWidth: number;
  siteContainerWidth: number;
  tabletWidth: number;
  mobileWidth: number;
  smallMobileWidth: number;
}

export interface CircleIconTheme {
  padding: string;
  backgroundColor: string;
  color: string;
}

export interface TypographyTheme {
  fontFamily: string[];
  color: string;
}

export interface BaseButtonTheme {
  normalHeight: string;
  largeHeight: string;
  borderRadius: string;
  fontSize: string;
  fontWeight: number;
  disabled: {
    color: string;
    backgroundColor: string;
  };
}

export interface LightButtonTheme {
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
  fontSize: string;
  fontWeight: number;
  borderColor: string;
  color: string;
  backgroundColor: string;
}

export interface PrimaryButtonTheme {
  backgroundColor: string;
  color: string;
}

export interface SecondaryButtonTheme {
  backgroundColor: string;
  color: string;
}

export interface InputTheme {
  height: string;
  paddingLeft: string;
  paddingRight: string;
  borderRadius: string;
  borderColor: string;
  fontSize: string;
  fontWeight: number;
  color: string;
  backgroundColor: string;
  focus: {
    borderColor: string;
  };
  placeholder: {
    color: string;
  };
  disabled: {
    color: string;
    backgroundColor: string;
  };
}

export interface TextAreaTheme {
  paddingTop: string;
  paddingBottom: string;
}

export interface SelectTheme {
  bulletColor: string;
  fontSize: string;
  fontWeight: number;
}

export interface CheckboxTheme {
  borderColor: string;
  checkedBackgroundColor: string;
  uncheckedBackgroundColor: string;
}

export interface CardTheme {
  backgroundColor: string;
  boxShadow: string;
  borderRadius: string;
}

export interface CardContentTheme {
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
}

export interface CardHeaderTheme {
  marginTop: string;
}

export interface CardTitleTheme {
  paddingLeft: string;
  paddingRight: string;
  borderWidth: string;
  borderColor: string;
  color: string;
  fontSize: string;
  fontWeight: number;
}

export interface ContentTheme {
  padding: string;
  backgroundColor: string;
}

export interface FieldErrorTheme {
  marginTop: string;
  color: string;
  fontSize: string;
  fontWeight: number;
}

export interface FormFieldTheme {
  labelMarginBottom: string;
  iconMarginRight: string;
}

export interface FooterTheme {
  backgroundColor: string;
  footerTextColor: string;
  footerContentColor: string;
  footerBottomBorderTop: string;
}

export interface BadgeTheme {
  size: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
  fontWeight: number;
}

export interface RadioButtonTheme {
  paddingTop: string;
  paddingBottom: string;
  checkedBackgroundColor: string;
  uncheckedBackgroundColor: string;
  checkedColor: string;
  uncheckedColor: string;
  checkedBorderColor: string;
  uncheckedBorderColor: string;
}

export interface FormLabelTheme {
  fontSize: string;
  fontWeight: number;
}

export interface UnorderedListTheme {
  color: string;
  paddingLeft: string;
  listMarginBottom: string;
  fontSize: string;
  fontWeight: number;
}

export interface OrderedListTheme {
  color: string;
  paddingLeft: string;
  listMarginBottom: string;
  fontSize: string;
  fontWeight: number;
  badgeBackgroundColor: string;
  badgeTextColor: string;
}

export interface UploadButtonTheme {
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  color: string;
}

export interface ImageSliderTheme {
  imageMargin: string;
}

export interface ImageThumbnailTheme {
  size: string;
  borderRadius: string;
}

export interface CardBannerTheme {
  paddingLeft: string;
  paddingRight: string;
  color: string;
}

export interface CardBannerMainTitleTheme {
  fontSize: string;
  fontWeight: number;
}

export interface CardBannerTitleTheme {
  fontSize: string;
  fontWeight: number;
}

export interface CardBannerTextTheme {
  fontSize: string;
  fontWeight: number;
}

export interface ModalTheme {
  background: string;
}

export interface ModalCardTheme {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export interface ModalContentTheme {
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
}

export interface ModalHeaderTheme {
  paddingRight: string;
  marginTop: string;
  closeIconMarginTop: string;
  closeIconMarginRight: string;
  closeIconColor: string;
}

export interface ModalTitleTheme {
  paddingLeft: string;
  paddingRight: string;
  borderWidth: string;
  borderColor: string;
  color: string;
  fontSize: string;
  fontWeight: number;
}

export interface MultipleChoiceButtonTheme {
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  fontSize: string;
  fontWeight: number;
  backgroundColor: string;
  selectedColor: string;
  unselectedColor: string;
}

export interface MultipleChoiceGroupTheme {
  marginBottom: string;
}

export interface ListTheme {
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
  borderColor: string;
}

export interface PdfViewTheme {
  backgroundColor: string;
  bottom: string;
  right: string;
}

export interface GridTheme {
  gutter: string;
}

export interface PinInputTheme {
  selectedColor: string;
  unselectedColor: string;
}

export interface PanelTheme {
  backgroundColor: string;
  boxShadow: string;
  borderRadius: string;
  headerPaddingTop: string;
  headerPaddingBottom: string;
  headerPaddingLeft: string;
  headerPaddingRight: string;
  contentPaddingTop: string;
  contentPaddingBottom: string;
  contentPaddingLeft: string;
  contentPaddingRight: string;
  iconPositionTop: string;
  iconPositionRight: string;
  marginBottom: string;
}

export default interface Theme extends FontTheme, MetricsTheme {
  Config: SiteConfig;
  Colors: ColorsConfig;
  Metrics: MetricsConfig;
  BadgeTheme: BadgeTheme;
  BaseButtonTheme: BaseButtonTheme;
  CardBannerMainTitleTheme: CardBannerMainTitleTheme;
  CardBannerTextTheme: CardBannerTextTheme;
  CardBannerTheme: CardBannerTheme;
  CardBannerTitleTheme: CardBannerTitleTheme;
  CardTheme: CardTheme;
  CardContentTheme: CardContentTheme;
  CardHeaderTheme: CardHeaderTheme;
  CardTitleTheme: CardTitleTheme;
  CheckboxTheme: CheckboxTheme;
  CircleIconTheme: CircleIconTheme;
  ContentTheme: ContentTheme;
  FieldErrorTheme: FieldErrorTheme;
  FormFieldTheme: FormFieldTheme;
  FormLabelTheme: FormLabelTheme;
  GridTheme: GridTheme;
  IconTheme: IconTheme;
  ImageSliderTheme: ImageSliderTheme;
  ImageThumbnailTheme: ImageThumbnailTheme;
  InputTheme: InputTheme;
  LightButtonTheme: LightButtonTheme;
  ListTheme: ListTheme;
  ModalTheme: ModalTheme;
  ModalCardTheme: ModalCardTheme;
  ModalContentTheme: ModalContentTheme;
  ModalHeaderTheme: ModalHeaderTheme;
  ModalTitleTheme: ModalTitleTheme;
  MultipleChoiceButtonTheme: MultipleChoiceButtonTheme;
  MultipleChoiceGroupTheme: MultipleChoiceGroupTheme;
  OrderedListTheme: OrderedListTheme;
  PrimaryButtonTheme: PrimaryButtonTheme;
  PinInputTheme: PinInputTheme;
  RadioButtonTheme: RadioButtonTheme;
  SecondaryButtonTheme: SecondaryButtonTheme;
  SelectTheme: SelectTheme;
  TextAreaTheme: TextAreaTheme;
  TypographyTheme: TypographyTheme;
  FooterTheme: FooterTheme;
  UnorderedListTheme: UnorderedListTheme;
  UploadButtonTheme: UploadButtonTheme;
  PdfViewTheme: PdfViewTheme;
  PanelTheme: PanelTheme;
}
