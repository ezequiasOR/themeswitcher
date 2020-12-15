import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: stirng;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
    }
  }
}