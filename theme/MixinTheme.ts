export interface MetricsConfig {
  tiny: string;
  small: string;
  medium: string;
  base: string;
  large: string;
  xl: string;
}

export interface ColorsConfig {
  backgroundColor: string;
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  lightContentText: string;
  errorText: string;
  completed: string;
  white: string;
  lightGray: string;
  paleGray: string;
  footerBackground: string;
  footerContentColor: string;
  contentBackground: string;
  navyBlue: string;
  black: string;
}

export interface FontSizeTheme {
  fontSize: string;
  fontWeight: number;
}

export interface FontColorTheme {
  color: string;
}

export interface MarginTheme {
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export interface FontConfig {
  double: FontSizeTheme;
  large: FontSizeTheme;
  normal: FontSizeTheme;
  small: FontSizeTheme;
  tiny: FontSizeTheme;
  subtitle: FontSizeTheme;
  smallTitle: FontSizeTheme;
  pageHeader: FontSizeTheme;
  pageSubHeader: FontSizeTheme;
  mainTitle: FontSizeTheme;
  title: FontSizeTheme;
  errorMessage: FontSizeTheme;
  input: FontSizeTheme;
}

export interface FontTheme {
  TextDouble: FontSizeTheme;
  TextLarge: FontSizeTheme;
  TextNormal: FontSizeTheme;
  TextSmall: FontSizeTheme;
  TextTiny: FontSizeTheme;
  TextColorPrimary: FontColorTheme;
  TextColorSecondary: FontColorTheme;
  TextColorNormal: FontColorTheme;
  TextColorLight: FontColorTheme;
}

export interface MetricsTheme {
  MetricsTiny: string;
  MetricsSmall: string;
  MetricsMedium: string;
  MetricsBase: string;
  MetricsLarge: string;
  MetricsXl: string;
}

class MixinTheme {
  public Colors: ColorsConfig;
  public Metrics: MetricsConfig;
  public Font: FontConfig;

  constructor(Colors, Font, Metrics) {
    this.Colors = Colors;
    this.Font = Font;
    this.Metrics = Metrics;
  }

  public fontStyles(): FontTheme {
    return {
      TextDouble: this.Font.double,
      TextLarge: this.Font.large,
      TextNormal: this.Font.normal,
      TextSmall: this.Font.small,
      TextTiny: this.Font.tiny,
      TextColorPrimary: {
        color: this.Colors.primary,
      },
      TextColorSecondary: {
        color: this.Colors.secondary,
      },
      TextColorNormal: {
        color: this.Colors.lightContentText,
      },
      TextColorLight: {
        color: this.Colors.lightContentText,
      },
    };
  }

  public metricsStyles(): MetricsTheme {
    return {
      MetricsTiny: this.Metrics.tiny,
      MetricsSmall: this.Metrics.small,
      MetricsMedium: this.Metrics.medium,
      MetricsBase: this.Metrics.base,
      MetricsLarge: this.Metrics.large,
      MetricsXl: this.Metrics.xl,
    };
  }
}

export default MixinTheme;
