import theme from 'styled-theming';

export interface Theme {
  backgroundColour: theme.ThemeSet;
  header: {
    foreground: theme.ThemeSet;
    background: theme.ThemeSet;
  };
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
    disabled?: {
      foreground: theme.ThemeSet;
      background: theme.ThemeSet;
    };
  };
  list: {
    foreground: theme.ThemeSet;
    background: theme.ThemeSet;
  };
  heading: {
    foreground: theme.ThemeSet;
    font: theme.ThemeSet;
  };
  input: {
    foreground: theme.ThemeSet;
    background: theme.ThemeSet;
    placeholder: theme.ThemeSet;
  };
  error: {
    foreground: theme.ThemeSet;
    background: theme.ThemeSet;
  };
}

// TODO: Move this to an external JSON file
export default {
  backgroundColour: theme('mode', { dark: 'rgb(32, 32, 32)' }),
  header: {
    foreground: theme('mode', { dark: 'rgb(255,255,255)' }),
    background: theme('mode', { dark: 'rgb(48, 48, 48)' }),
  },
  button: {
    background: theme('mode', { dark: 'rgba(255, 255, 255, 0.2)' }),
    foreground: theme('mode', { dark: 'rgb(255, 255, 255)' }),
    pressed: {
      background: theme('mode', { dark: 'rgba(255, 255, 255, 0.4)' }),
    },
    hover: {
      background: theme('mode', { dark: 'rgba(255, 255, 255, 0.3)' }),
    },
    disabled: {
      background: theme('mode', { dark: 'rgba(192, 192, 192, 1)' }),
    },
  },
  list: {
    background: theme('mode', { dark: 'rgba(255, 255, 255, 0.2)' }),
    foreground: theme('mode', { dark: 'rgb(255, 255, 255)' }),
  },
  heading: {
    foreground: theme('mode', { dark: 'rgb(255, 255, 255)' }),
    font: theme('mode', { dark: 'Verdana' }),
  },
  input: {
    background: theme('mode', { dark: 'rgba(255, 255, 255, 0.2)' }),
    foreground: theme('mode', { dark: 'rgb(255, 255, 255)' }),
    placeholder: theme('mode', { dark: 'rgba(255, 255, 255, 0.6)' }),
  },
  error: {
    background: theme('mode', { dark: 'rgba(255, 128, 128, 0.3)' }),
    foreground: theme('mode', { dark: 'rgb(255, 128, 128)' }),
  },
} as Theme;
