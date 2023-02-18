import Footer from 'components/Layouts/Footer/Footer';
import HeaderLayout from 'components/Layouts/HeaderLayout/HeaderLayout';
import MainLayout from 'components/Layouts/MainLayout/MainLayout';
import { FC, ReactNode } from 'react';

export interface INotFountLayout {
  children: ReactNode;
}

const NotFountLayout: FC<INotFountLayout> = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <MainLayout className='flex items-center justify-center'>{children}</MainLayout>
      <Footer />
    </>
  );
};

export default NotFountLayout;
