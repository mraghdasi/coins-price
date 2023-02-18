import { FC, ReactNode } from 'react';
import { ThemeProvider as Theme } from 'next-themes';

interface IThemeProvider {
  children: ReactNode;
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  return <Theme attribute='data-theme' defaultTheme='light'>{children}</Theme>;
};

export default ThemeProvider;
