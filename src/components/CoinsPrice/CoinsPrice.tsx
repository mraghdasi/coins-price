import { FC } from 'react';
import CoinsPriceTable from './components/CoinsPriceTable';
import { ICoinPrice } from 'core/types/Models/coinPrice';

interface ICoinsPrice {
  coinsPrices: ICoinPrice[];
}

const CoinsPrice: FC<ICoinsPrice> = ({ coinsPrices }) => {
  return <CoinsPriceTable coinsPrices={coinsPrices} />;
};

export default CoinsPrice;
