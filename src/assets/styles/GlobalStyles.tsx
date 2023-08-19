import React from 'react';
import { css, Global } from '@emotion/react';

import { mq } from '@utils/media-query/mediaQuery';
import AppTheme, { TColorTheme } from 'theme';

export const style = (props: TColorTheme) => css`
  @font-face {
    font-family: 'GangwonEduAll';
    font-weight: 300;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.eot');
    src:
      url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.ttf')
        format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'GangwonEduAll';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.eot');
    src:
      url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.ttf')
        format('truetype');
    font-display: swap;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    line-height: normal;
    overflow-x: hidden;
    font-family: 'SUIT Variable', sans-serif;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
    font-size: 1.6rem;
    background: ${props.background};
    color: ${props.text};
    padding: 0;
    margin: 0;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 1rem;
      height: 0.6rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #dcdcdc;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ${mq('desktop')} {
      font-size: 1.6rem;
    }
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 1rem;
      height: 0.6rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #dcdcdc;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  *::placeholder {
    font-family: 'SUIT Variable', sans-serif;
    font-weight: normal;
    font-size: 1.6rem;
    color: ${AppTheme.color.placeholderColor};
  }

  button,
  a {
    &:hover {
      transition: all 0.3s;
    }
  }

  ul,
  li {
    list-style: none;
  }

  button {
    font: inherit;
    cursor: pointer;
    outline: none;
    background: inherit;
  }

  textarea,
  input,
  select {
    outline: none;
    font-family: 'SUIT Variable', sans-serif;
    font-size: 1.6rem;

    &::placeholder {
      transition: all 0.3s;
    }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface IThemeProps {
  theme: TColorTheme;
}

function GlobalStyle({ theme }: IThemeProps) {
  return <Global styles={style(theme)} />;
}

export default GlobalStyle;
