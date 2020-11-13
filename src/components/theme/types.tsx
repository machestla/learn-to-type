export interface Shadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  outline: string;
  inner: string;
  none: string;
}

export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type Breakpoints =
  | string[]
  | { sm: string; md: string; lg: string; xl: string };

type StringOrNumber = string | number;
export interface ZIndices {
  hide: number;
  auto: string;
  base: number;
  docked: number;
  dropdown: number;
  sticky: number;
  banner: number;
  overlay: number;
  modal: number;
  popover: number;
  skipLink: number;
  toast: number;
  tooltip: number;
}

export interface Radii {
  none: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface Borders {
  none: StringOrNumber;
  "1px": StringOrNumber;
  "2px": StringOrNumber;
  "4px": StringOrNumber;
}

export interface Colors {
  transparent: string;
  current: string;
  black: string;
  white: string;
  whiteAlpha: ColorHues;
  blackAlpha: ColorHues;
  gray: ColorHues;
  red: ColorHues;
  orange: ColorHues;
  yellow: ColorHues;
  green: ColorHues;
  teal: ColorHues;
  blue: ColorHues;
  cyan: ColorHues;
  purple: ColorHues;
  pink: ColorHues;
  linkedin: ColorHues;
  facebook: ColorHues;
  messenger: ColorHues;
  whatsapp: ColorHues;
  twitter: ColorHues;
  telegram: ColorHues;
}

export type VariantColor = keyof Omit<Colors, "transparent" | "current">;

export interface BaseSizes {
  px: string;
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "8": string;
  "10": string;
  "12": string;
  "16": string;
  "20": string;
  "24": string;
  "32": string;
  "40": string;
  "48": string;
  "56": string;
  "64": string;
}

export interface LargeSizes {
  full: string;
  "3xs": string;
  "2xs": string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
}

export interface Containers {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type Sizes = BaseSizes &
  LargeSizes & {
    containers: Containers;
  };

export interface LetterSpacings {
  tighter: string;
  tight: string;
  normal: string;
  wide: string;
  wider: string;
  widest: string;
}

export interface LineHeights {
  normal: string;
  none: string;
  shorter: string;
  short: string;
  base: string;
  tall: string;
  taller: string;
}

export interface FontWeights {
  hairline: number;
  thin: number;
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
  black: number;
}

export interface Fonts {
  heading: string;
  body: string;
  mono: string;
}

export interface FontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
}

export interface Typography {
  letterSpacings: LetterSpacings;
  lineHeights: LineHeights;
  fontWeights: FontWeights;
  fonts: Fonts;
  fontSizes: FontSizes;
}

export interface Opacity {
  "0": string;
  "20%": string;
  "40%": string;
  "60%": string;
  "80%": string;
  "100%": string;
}

export interface DefaultTheme extends Typography {
  breakpoints: Breakpoints;
  zIndices: ZIndices;
  radii: Radii;
  opacity: Opacity;
  borders: Borders;
  colors: Colors;
  sizes: Sizes;
  shadows: Shadows;
  space: BaseSizes;
}
