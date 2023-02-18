import { FC, ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Container: FC<IContainer> = ({ noPadding, children, className }) => {
  return <div className={`max-w-[1200px] mx-auto ${noPadding ? 'px-0' : 'px-4 xl:px-0'} ${className}`}>{children}</div>;
};

export default Container;
