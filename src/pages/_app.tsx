import 'assets/styles/colors.css';
import 'assets/styles/globals.scss';

import type { AppProps } from 'next/app';
import IndexProvider from 'core/providers/IndexProvider';
import NextNProgress from 'next-progress';
import { Fragment } from 'react';
import { Page } from 'core/types/components/RootNextPageLayout';

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  // adjust accordingly if you disabled a layout rendering option
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.Layout ?? Fragment;

  return (
    <IndexProvider>
      <div className='main-template'>
        <Layout>
          <NextNProgress color='var(--z-success)' height={5} />
          {getLayout(<Component {...pageProps} />)}
        </Layout>
      </div>
    </IndexProvider>
  );
}
