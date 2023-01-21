import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        400: string;
      },
      secondary: {
        400: string;
      },
      tertiary: {
        400: string;
      },
      neutral: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      }
    };
  }
}
