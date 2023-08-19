import { Theme } from '@emotion/react';

export const image = {
  pcLoginBg: require('../src/assets/images/pc-login-bg.svg'),
  moLoginBg: require('../src/assets/images/mo-login-bg.svg'),
  dummyLogo: require('../src/assets/images/dummy-logo.svg'),
};

export const AppTheme: Theme = {
  image,
  color: {
    white: '#FFFFFF',
    siteRed: '#F53737',
    siteWhite: '#FAFAFA',
    siteBlack: '#303030',
    forthBlack: '#979797',
    sitePrimaryBlue: '#74A7AC',
    placeholderColor: '#555555',
    borderOne: '#CCCCCC',
    disabled: '#C8C8C8',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    heavy: 900,
  },
  shadow: {
    primary: '1rem 1rem 0.5rem rgba(0, 0, 0, 10%)',
  },
  fontFamily: {
    primary: '"SUIT Variable", sans-serif',
  },
};

export const LIGHT_THEME = {
  background: AppTheme.color.siteWhite,
  text: AppTheme.color.siteBlack,
  mainColor: AppTheme.color.sitePrimaryBlue,
};

export const DARK_THEME = {
  background: AppTheme.color.siteBlack,
  text: AppTheme.color.siteWhite,
  mainColor: AppTheme.color.sitePrimaryBlue,
};

export type TColorTheme = typeof LIGHT_THEME;

export type ITheme = typeof AppTheme;

export default AppTheme;
