import useQueryStatic from 'core/hooks/useQueryStatic';
import { ICoinPrice } from 'core/types/Models/coinPrice';
import { useEffect, useState } from 'react';

const useCoinPrice = (coinsPrices: ICoinPrice[]) => {
  const { handlePagination, page, per_page } = useQueryStatic();

  const [inputValue, setInputValue] = useState('');
  const [coinsPriceFilter, setCoinsPriceFilter] = useState(coinsPrices);

  useEffect(() => {
    if (inputValue) {
      setCoinsPriceFilter(coinsPrices.filter((coin) => coin.coin.includes(inputValue)));
    } else {
      setCoinsPriceFilter(coinsPrices);
    }
  }, [inputValue]);

  return { handlePagination, page, per_page, inputValue, coinsPriceFilter, setInputValue };
};

export default useCoinPrice;
