import NotFountLayout from 'components/Layouts/PagesLayouts/NotFountLayout/NotFountLayout';
import ZpButton from 'components/UI/Button/TpButton';
import ZpImage from 'components/UI/Image/TpImage';
import { useIsServerSide } from 'core/hooks/useIsServerSide';
import { RootState } from 'core/store';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const notFound = () => {
  // store
  const { theme } = useSelector((store: RootState) => store.settingThemeStore);

  // hooks
  const { isServerSide } = useIsServerSide();
  const { push } = useRouter();

  return (
    <>
      <NextSeo description='متاسفانه صفحه مورد نظر یافت نشد' defaultTitle='صفحه 404' />
      <div className='flex flex-col space-y-10 items-center justify-center h-full'>
        {!isServerSide && <ZpImage src={`/coins-price/assets/images/404-${theme}.svg`} width={500} height={400} alt='404 icon' />}
        <p className='text-lg'>متاسفانه صفحه مورد نظر یافت نشد!</p>
        <ZpButton className='w-28' onClick={() => push('/')}>
          بازگشت
        </ZpButton>
      </div>
    </>
  );
};

notFound.Layout = NotFountLayout;

export default notFound;
