import '@emotion/react';
import { image } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    image: typeof image;
    color: {
      white: string;
      siteWhite: string;
      siteBlack: string;
      siteRed: string;
      forthBlack: string;
      sitePrimaryBlue: string;
      placeholderColor: string;
      borderOne: string;
      disabled: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      heavy: number;
    };
    shadow: {
      primary: string;
    };
    fontFamily: {
      primary: string;
    };
  }
}
