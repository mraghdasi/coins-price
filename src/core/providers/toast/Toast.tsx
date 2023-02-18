import useMasterTheme from 'core/hooks/useMasterTheme';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

const Toast: FC = () => {
  const { theme } = useMasterTheme();

  return <ToastContainer rtl limit={3} theme={theme === 'light' ? 'light' : 'dark'} />;
};

export default Toast;
