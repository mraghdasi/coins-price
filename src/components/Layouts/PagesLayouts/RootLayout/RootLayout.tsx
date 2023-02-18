import Footer from 'components/Layouts/Footer/Footer';
import HeaderLayout from 'components/Layouts/HeaderLayout/HeaderLayout';
import MainLayout from 'components/Layouts/MainLayout/MainLayout';
import { FC, ReactNode } from 'react';

export interface IRootLayout {
  children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </>
  );
};

export default RootLayout;
