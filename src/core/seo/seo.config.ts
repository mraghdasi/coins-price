import { DefaultSeoProps } from 'next-seo';

export const useSeoConfig = () => {
  const seoConfig: DefaultSeoProps = {
    openGraph: {
      title: 'لیست ارزهای دیجیتال',
      type: 'website',
      locale: 'fa',
    },
    title: 'لیست ارزهای دیجیتال',
  };

  return { seoConfig };
};
