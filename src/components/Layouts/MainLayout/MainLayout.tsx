import { FC, ReactNode } from 'react';

interface IMainLayout {
  children: ReactNode;
  className?: string;
}

const MainLayout: FC<IMainLayout> = ({ className, children }) => {
  return <main className={`main my-10 ${className}`}>{children}</main>;
};

export default MainLayout;
