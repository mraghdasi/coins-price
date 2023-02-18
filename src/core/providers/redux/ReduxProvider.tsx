import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import store from 'core/store';

interface IReduxProvider {
  children: ReactNode;
}

const ReduxProvider: FC<IReduxProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
