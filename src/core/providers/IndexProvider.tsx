import { FC, ReactNode } from 'react';
import AppProvider from './app/AppProvider';
import ReduxProvider from './redux/ReduxProvider';
import SeoProvider from './seo/SeoProvider';
import ThemeProvider from './theme/ThemeProvider';
import Toast from './toast/Toast';
import AntProvider from './AntProvider/AntProvider';

interface IndexProvider {
  children: ReactNode;
}
const IndexProvider: FC<IndexProvider> = ({ children }) => {
  return (
    <ReduxProvider>
      <AntProvider>
        <AppProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppProvider>
        <SeoProvider />
        <Toast />
      </AntProvider>
    </ReduxProvider>
  );
};

export default IndexProvider;
