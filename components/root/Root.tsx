import { injectGlobal } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {}

const Root: React.SFC<Props> = ({ theme, ...props}: Props) => {
  const {
    TypographyTheme,
    TextColorPrimary,
    TextColorSecondary,
    TextColorNormal,
    TextColorLight,
    TextDouble,
    TextLarge,
    TextNormal,
    TextSmall,
    TextTiny,
    MetricsTiny,
    MetricsSmall,
    MetricsMedium,
    MetricsBase,
    MetricsLarge,
    MetricsXl,
  } = theme;
  // tslint:disable-next-line
  injectGlobal`
    html {
      line-height: 1.4; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
      font-family: ${TypographyTheme.fontFamily.join(",")}
    }
    body {
      margin: 0;
      color: ${TypographyTheme.color};
      font-size: ${TextNormal.fontSize};
      font-weight: ${TextNormal.fontWeight};
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }
    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }
    a {
      background-color: transparent;
      text-decoration: none;
      color: inherit;
    }
    abbr[title] {
      border-bottom: none; /* 1 */
      text-decoration: underline; /* 2 */
      text-decoration: underline dotted; /* 2 */
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.18; /* 1 */
      margin: 0; /* 2 */
    }
    button,
    input { /* 1 */
      overflow: visible;
    }
    img {
      max-width: 100%;
      border: 0;
    }
    button,
    select { /* 1 */
      text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    legend {
      box-sizing: border-box; /* 1 */
      color: inherit; /* 2 */
      display: table; /* 1 */
      max-width: 100%; /* 1 */
      padding: 0; /* 3 */
      white-space: normal; /* 1 */
    }
    progress {
      vertical-align: baseline;
    }
    textarea {
      overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    [type="search"] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }
    details {
      display: block;
    }
    summary {
      display: list-item;
    }
    template {
      display: none;
    }
    [hidden] {
      display: none;
    }
    * {
      box-sizing: border-box;
    }
    .text-color-primary {
      color: ${TextColorPrimary.color};
    }
    .text-color-secondary {
      color: ${TextColorSecondary.color};
    }
    .text-color-light {
      color: ${TextColorLight.color};
    }
    .text-color-normal {
      color: ${TextColorNormal.color};
    }
    .text-color-white {
      color: #fff;
    }
    .text-size-tiny {
      font-size: ${TextTiny.fontSize} !important;
      font-weight: ${TextTiny.fontWeight} !important;
    }
    .text-size-small {
      font-size: ${TextSmall.fontSize} !important;
      font-weight: ${TextSmall.fontWeight} !important;
    }
    .text-size-normal {
      font-size: ${TextNormal.fontSize} !important;
      font-weight: ${TextNormal.fontWeight} !important;
    }
    .text-size-large {
      font-size: ${TextLarge.fontSize} !important;
      font-weight: ${TextLarge.fontWeight} !important;
    }
    .text-size-double {
      font-size: ${TextDouble.fontSize} !important;
      font-weight: ${TextDouble.fontWeight} !important;
    }
    .text-bold {
      font-weight: bold;
    }
    .text-half-bold {
      font-weight: 500;
    }
    .text-left {
      text-align: left;
    }
    .text-right {
      text-align: right;
    }
    .text-center {
      text-align: center;
    }
    .margin-top-xl {
      margin-top: ${MetricsXl} !important;
    }
    .margin-right-xl {
      margin-right: ${MetricsXl} !important;
    }
    .margin-bottom-xl {
      margin-bottom: ${MetricsXl} !important;
    }
    .margin-left-xl {
      margin-left: ${MetricsXl} !important;
    }
    .margin-top-large {
      margin-top: ${MetricsLarge} !important;
    }
    .margin-right-large {
      margin-right: ${MetricsLarge} !important;
    }
    .margin-bottom-large {
      margin-bottom: ${MetricsLarge} !important;
    }
    .margin-left-large {
      margin-left: ${MetricsLarge} !important;
    }
    .margin-top {
      margin-top: ${MetricsBase} !important;
    }
    .margin-right {
      margin-right: ${MetricsBase} !important;
    }
    .margin-bottom {
      margin-bottom: ${MetricsBase} !important;
    }
    .margin-left {
      margin-left: ${MetricsBase} !important;
    }
    .margin-top-medium {
      margin-top: ${MetricsMedium} !important;
    }
    .margin-right-medium {
      margin-right: ${MetricsMedium} !important;
    }
    .margin-bottom-medium {
      margin-bottom: ${MetricsMedium} !important;
    }
    .margin-left-medium {
      margin-left: ${MetricsMedium} !important;
    }
    .margin-top-small {
      margin-top: ${MetricsSmall} !important;
    }
    .margin-right-small {
      margin-right: ${MetricsSmall} !important;
    }
    .margin-bottom-small {
      margin-bottom: ${MetricsSmall} !important;
    }
    .margin-left-small {
      margin-left: ${MetricsSmall} !important;
    }
    .margin-top-tiny {
      margin-top: ${MetricsTiny} !important;
    }
    .margin-right-tiny {
      margin-right: ${MetricsTiny} !important;
    }
    .margin-bottom-tiny {
      margin-bottom: ${MetricsTiny} !important;
    }
    .margin-left-tiny {
      margin-left: ${MetricsTiny} !important;
    }
    .margin-top-remove {
      margin-top: 0 !important;
    }
    .margin-right-remove {
      margin-right: 0 !important;
    }
    .margin-bottom-remove {
      margin-bottom: 0 !important;
    }
    .margin-left-remove {
      margin-left: 0 !important;
    }
    .margin-remove {
      margin: 0 !important;
    }
    .padding-top-xl {
      padding-top: ${MetricsXl} !important;
    }
    .padding-right-xl {
      padding-right: ${MetricsXl} !important;
    }
    .padding-bottom-xl {
      padding-bottom: ${MetricsXl} !important;
    }
    .padding-left-xl {
      padding-left: ${MetricsXl} !important;
    }
    .padding-top-large {
      padding-top: ${MetricsLarge} !important;
    }
    .padding-right-large {
      padding-right: ${MetricsLarge} !important;
    }
    .padding-bottom-large {
      padding-bottom: ${MetricsLarge} !important;
    }
    .padding-left-large {
      padding-left: ${MetricsLarge} !important;
    }
    .padding-top-medium {
      padding-top: ${MetricsMedium} !important;
    }
    .padding-right-medium {
      padding-right: ${MetricsMedium} !important;
    }
    .padding-bottom-medium {
      padding-bottom: ${MetricsMedium} !important;
    }
    .padding-left-medium {
      padding-left: ${MetricsMedium} !important;
    }
    .padding-top {
      padding-top: ${MetricsBase} !important;
    }
    .padding-right {
      padding-right: ${MetricsBase} !important;
    }
    .padding-bottom {
      padding-bottom: ${MetricsBase} !important;
    }
    .padding-left {
      padding-left: ${MetricsBase} !important;
    }
    .vertical-align-top {
      vertical-align: top;
    }
    .vertical-align-middle {
      vertical-align: middle;
    }
    .vertical-align-bottom {
      vertical-align: bottom;
    }
    .background-primary {
      background-color: ${TextColorPrimary.color};
    }
    .float-left {
      float: left;
    }
    .float-right {
      float: right;
    }
    .clearfix {
      overflow: auto;
    }
    .inline-block {
      display: inline-block;
    }
    .hidden-small {
      @media (max-width: 767px) {
        display: none !important;
      }
    }
    .visible-small {
      @media (min-width: 767px) {
        display: none !important;
      }
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .no-wrap {
      white-space: nowrap;
    }
  `;

  return (
    <div {...props} />
  );
};

export default withTheme(Root);
