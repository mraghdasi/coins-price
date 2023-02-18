import { FC, ReactNode } from 'react';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider: FC<IAppProvider> = ({ children }) => {
  return <>{children}</>;
};

export default AppProvider;
