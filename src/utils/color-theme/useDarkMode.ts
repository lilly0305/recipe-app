import { useEffect, useState } from 'react';
import { DARK_THEME, LIGHT_THEME, TColorTheme } from 'theme';

export const useDarkMode = () => {
  const [siteTheme, setSiteTheme] = useState<TColorTheme>(LIGHT_THEME);

  const setMode = (mode: TColorTheme) => {
    mode === LIGHT_THEME
      ? window.localStorage.setItem('siteTheme', 'light')
      : window.localStorage.setItem('siteTheme', 'dark');
    setSiteTheme(mode);
  };

  const toggleTheme = () => {
    siteTheme === LIGHT_THEME ? setMode(DARK_THEME) : setMode(LIGHT_THEME);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('siteTheme');

    if (localTheme !== null) {
      if (localTheme === 'dark') {
        setSiteTheme(DARK_THEME);
      } else {
        setSiteTheme(LIGHT_THEME);
      }
    }
  }, []);

  return { siteTheme, toggleTheme };
};
