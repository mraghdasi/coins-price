import Container from 'components/Layouts/Container/Container';
import { GetStaticProps } from 'next';
import api from 'core/services/api/useApi';
import { endPointUrls } from 'core/constants/endPointUrls';
import RootLayout from 'components/Layouts/PagesLayouts/RootLayout/RootLayout';
import { ICoinsType } from 'core/types/Models/coinsType';
import queryString from 'query-string';
import { AxiosError } from 'axios';
import CoinsPrice from 'components/CoinsPrice/CoinsPrice';
import { ICoinPrice } from 'core/types/Models/coinPrice';

interface IHome {
  coinsPrices?: ICoinPrice[];
  badRequest?: boolean;
}

const Home = ({ coinsPrices = [], badRequest = false }: IHome) => {
  return (
    <Container className='grid gap-24'>
      <CoinsPrice coinsPrices={coinsPrices} />
      {badRequest && <p className='text-center'>تعداد درخواست ها بالاست!! مجدد تلاش فرمایید</p>}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let coinsList = [] as ICoinsType[];
  let supportedCurrencies = [] as any[];
  let coinsPrices = [] as any[];

  try {
    const [coinsResponse, supportedCurrenciesResponse] = await Promise.all([await api.get(endPointUrls.COINS_LIST), await api.get(endPointUrls.SIMPLE_SUPPORTED_CURRENCIES)]);
    coinsList = (await coinsResponse.data) as ICoinsType[];
    supportedCurrencies = (await supportedCurrenciesResponse.data) as any[];
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) return { notFound: true };
      if (error.response?.status === 429) return { props: { coinsPrices: [], badRequest: true } };
      if (error.response?.status === 500) throw new Error('Internal Server Error');
    }
  }

  const coinsAvailable = coinsList.filter((coin) => supportedCurrencies.some((supportedCurrency) => coin.symbol === supportedCurrency));
  const ids = coinsAvailable.map((coin) => coin.id);

  try {
    const coinsPricesResponse = await api.get(endPointUrls.SIMPLE_PRICE(`vs_currencies=usd&ids=${queryString.stringify({ ids }, { arrayFormat: 'comma' })}`));
    coinsPrices = (await coinsPricesResponse.data) as any[] | [];
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) return { notFound: true };
      if (error.response?.status === 429) return { props: { coinsPrices: [], badRequest: true } };
      if (error.response?.status === 500) throw new Error('Internal Server Error');
    }
  }

  return {
    props: { coinsPrices: Object.keys(coinsPrices).map((key) => ({ id: key, coin: key, price: coinsPrices[key as any] })) || [] },
    revalidate: 600,
  };
};

Home.Layout = RootLayout;

export default Home;
