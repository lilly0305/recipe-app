import React, { createContext, memo } from 'react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import { ConfigProvider } from 'antd';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyles } from '@assets/styles';

import AppTheme, { DARK_THEME, LIGHT_THEME, TColorTheme } from './theme';
import RecipeRouter from '@routes/RecipeRouter';
import { useDarkMode } from '@utils/color-theme/useDarkMode';
import { queryClient } from '@utils/react-query/queryClient';

interface ContextProps {
  siteTheme: TColorTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  siteTheme: LIGHT_THEME,
  toggleTheme: () => {
    return null;
  },
});

function App() {
  const { siteTheme, toggleTheme } = useDarkMode();

  return (
    <ThemeProvider theme={AppTheme}>
      <ThemeContext.Provider value={{ siteTheme, toggleTheme }}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <ConfigProvider
            theme={{
              token: {
                colorPrimary: AppTheme.color.sitePrimaryBlue,
                colorSuccess: AppTheme.color.sitePrimaryBlue,
                fontFamily: AppTheme.fontFamily.primary,
              },
            }}
          >
            <GlobalStyles theme={siteTheme === LIGHT_THEME ? LIGHT_THEME : DARK_THEME} />

            <RecipeRouter />
          </ConfigProvider>
        </QueryClientProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default memo(App);
