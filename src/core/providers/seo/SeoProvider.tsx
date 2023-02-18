import { useSeoConfig } from 'core/seo/seo.config';
import { DefaultSeo } from 'next-seo';
import { FC } from 'react';
import { ISiteInfoDetailType } from 'core/types/Models/blog/site/siteInfoType';

interface ISeoProvider {
  siteInfo?: ISiteInfoDetailType;
}

const SeoProvider: FC<ISeoProvider> = () => {
  const { seoConfig } = useSeoConfig();
  return <DefaultSeo {...seoConfig} />;
};

export default SeoProvider;
