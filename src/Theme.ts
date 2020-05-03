import theme from "styled-theming";

export interface Theme {
  backgroundColour: string;
  button: {
    foreground: theme.ThemeSet;
    background: theme.ThemeSet;
    pressed?: {
      foreground?: theme.ThemeSet;
      background?: theme.ThemeSet;
    };
    focused?: {
      foreground?: theme.ThemeSet;
      background?: theme.ThemeSet;
    };
    hover?: {
      foreground?: theme.ThemeSet;
      background?: theme.ThemeSet;
    };
  };
}

export default <Theme>{
  backgroundColour: "#000000",
  button: {
    background: theme("mode", { dark: "rgba(255, 255, 255, 0.2)" }),
    foreground: theme("mode", { dark: "rgb(255, 255, 255)" }),
    pressed: {
      background: theme("mode", { dark: "rgba(255, 255, 255, 0.4)" }),
    },
    hover: {
      background: theme("mode", { dark: "rgba(255, 255, 255, 0.3)" }),
    },
  },
};
