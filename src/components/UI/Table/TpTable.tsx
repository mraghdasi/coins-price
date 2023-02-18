import { SpinProps, Table, TableProps } from 'antd';
import { FC, ReactNode, useMemo } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import TpEmpty from '../Empty/TpEmpty';
import TpSkeleton from '../Skeleton/TpSkeleton';
import useQueryParam from 'core/hooks/useQueryParam';
import { mainFormatNumber, tableRowIndex } from 'core/utils/default';
import GtSpinner from '../Spinner/TpSpinner';

export interface ITpTable extends TableProps<any> {
  loading?: boolean;
  per_page?: number;
  rowKey?: string;
  countTitle?: string;
  overflow?: boolean;
  current?: number;
  count?: number | ReactNode;
  rowCount?: number;
  refetch?: any;
}

interface ITableColumn {
  title: string;
  dataIndex?: string;
  key?: number | string;
  sort?: boolean | null;
  render?: (text?: string | undefined, record?: object | undefined, index?: number | undefined) => any;
  width?: number;
  [x: string | number | symbol]: unknown;
}

const TpTable: FC<ITpTable> = ({
  rowKey = 'id',
  loading = false,
  overflow = true,
  className,
  current = 1,
  per_page = 10,
  countTitle = 'total',
  columns,
  count,
  rowCount = 15,
  dataSource = [],
  refetch,
  ...props
}) => {
  const { query } = useQueryParam();

  //status
  const defaultColumns = [
    {
      width: 35,
      title: '',
      render: (_text: any, _record: any, index: number) => tableRowIndex(index, current, per_page),
    },
  ];

  const generateEmptyRow = useMemo(() => {
    return [...Array(rowCount)].map((_, index) => ({
      [rowKey]: `key${index}`,
    }));
  }, []);

  const tableColumns: ITableColumn[] = [
    ...defaultColumns,
    ...(columns
      ? columns.map((col: any) => {
          if (col?.sorter === false) {
            return {
              ...col,
              dataIndex: col.key,
            };
          }

          if (col?.sort === 'customString') {
            return {
              ...col,
              dataIndex: col.key,
              sorter: (a: any, b: any) => (a[col.key] + '').toLowerCase().localeCompare((b[col.key] + '').toLowerCase()),
            };
          }

          if (col?.sort === 'customNumber') {
            return {
              ...col,
              dataIndex: col.key,
              sorter: (a: any, b: any) => +a[col.key] - +b[col.key],
            };
          }

          if (query.sort === col.key && query.sort && col.key) {
            return {
              ...col,
              dataIndex: col.key,
              defaultSortOrder: query.sort_way == 'ASC' ? 'ascend' : 'descend',
              sorter: true,
            };
          }

          return {
            ...col,
            dataIndex: col.key,
            sorter: true,
          };
        })
      : []),
  ];

  const tableLoading: boolean | SpinProps | undefined = { spinning: dataSource?.length > 0 ? loading : false, indicator: <GtSpinner /> };

  return (
    <div className='grid mb-4'>
      <div className='flex items-center justify-end mb-1'>
        <div className='flex gap-x-3'>
          {refetch && (
            <div
              className='flex items-center text-xs cursor-pointer gap-x-1 text-color-placeholder inherit-color w-fit'
              onClick={() => {
                !loading && refetch();
              }}>
              <AiOutlineReload className={`${loading && 'animate-spin'}`} />
              <span>بروز رسانی</span>
            </div>
          )}
          {!!count && (typeof count === 'number' ? count > 0 : false) && (
            <span className='text-sm mx-3'>{`${countTitle} :` + (typeof count === 'number' ? mainFormatNumber(count) : count)}</span>
          )}
          {!!count && typeof count !== 'number' && (
            <span className='flex items-center'>
              <span>{countTitle}</span>
              {count}
            </span>
          )}
        </div>
      </div>
      <div className={`${overflow && 'overflow-x-scroll rounded-2xl'}`}>
        <Table
          locale={{ emptyText: <TpEmpty /> }}
          rowKey={rowKey}
          loading={tableLoading}
          size='middle'
          pagination={false}
          className={`${className}`}
          dataSource={dataSource?.length > 0 ? dataSource : loading ? generateEmptyRow : []}
          columns={
            dataSource?.length > 0
              ? tableColumns
              : tableColumns.map((column) => {
                  return {
                    ...column,
                    render: () => loading && <TpSkeleton />,
                  };
                })
          }
          {...props}
        />
      </div>
    </div>
  );
};

export default TpTable;
