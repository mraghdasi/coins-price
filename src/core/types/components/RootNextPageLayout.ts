import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type Page<P = Record<string, never>> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  Layout?: ComponentType;
};