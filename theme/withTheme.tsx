import { withTheme as withThemeHoc } from "emotion-theming";
import * as React from "react";
import Theme from "./theme";
export interface InjectedThemeProps {
  theme: Theme;
}

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Subtract<T, K> = Omit<T, keyof K>;

export default function withTheme<P extends InjectedThemeProps>(
  Component: React.ComponentType<P>,
): React.ComponentType<Subtract<P, InjectedThemeProps>> {
  return withThemeHoc(Component);
}
