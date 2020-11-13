import React from "react";
import {
  CSSReset,
  ChakraProvider as ChakraUiThemeProvider
} from "@chakra-ui/core";
import theme, { Theme } from "@chakra-ui/theme";
import emotionStyled, { CreateStyled } from "@emotion/styled";

export const styled = emotionStyled as CreateStyled<Theme>;

const fonts = {
  ...theme.fonts,
  heading: "'Poppins', sans-serif",
  body: "'Source Sans Pro', sans-serif",
  mono: "Menlo, monospace"
};

const colors = {
  ...theme.colors,
  semantic: {
    valid: "#0DB518",
    error: "#E42929",
    warning: "#EFAB22",
    info: "#0085FF"
  }
};

type CustomTheme = Theme & {
  fonts: typeof fonts;
  colors: typeof colors;
};

export const customTheme: CustomTheme = {
  ...theme,
  fonts,
  colors
};

export const ThemeProvider = ({
  children
}: {
  children: JSX.Element;
}): JSX.Element => (
    <ChakraUiThemeProvider theme={customTheme}>
      <CSSReset />
      {children}
    </ChakraUiThemeProvider>
  );
