import TpInput from 'components/UI/Input/TpInput';
import TpPagination from 'components/UI/Pagination/TpPagination';
import TpTable from 'components/UI/Table/TpTable';
import { ICoinPrice } from 'core/types/Models/coinPrice';
import { paginateDataHandler } from 'core/utils/default';
import React, { FC } from 'react';
import useCoinPrice from '../hook/useCoinPrice';

interface ICoinsPriceTable {
  coinsPrices: ICoinPrice[];
}

const CoinsPriceTable: FC<ICoinsPriceTable> = ({ coinsPrices }) => {
  const { handlePagination, page, per_page, inputValue, setInputValue,coinsPriceFilter } = useCoinPrice(coinsPrices);
  const columns = [
    {
      title: 'Coin',
      key: 'coin',
      dataIndex: 'coin',
      render: (text: any) => text,
      sorter: false,
    },
    {
      title: 'Price',
      render: (_text: any, record: ICoinPrice) => <span className='rtl'>{`${record.price.usd} $`}</span>,
      sorter: false,
    },
  ];

  return (
    <div>
      <div className='flex flex-col mb-10'>
        <span>coin</span>
        <TpInput value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
      </div>
      <TpTable
        rowKey='id'
        columns={columns}
        dataSource={paginateDataHandler(coinsPriceFilter || [], page, per_page)}
        count={coinsPriceFilter?.length}
        loading={false}
        current={page}
        per_page={per_page}
      />
      <TpPagination onPaginationHandler={handlePagination} responsive={true} per_page={per_page} current={page} total={coinsPriceFilter?.length} />
    </div>
  );
};

export default CoinsPriceTable;
