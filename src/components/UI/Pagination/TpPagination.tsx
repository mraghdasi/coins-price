import { Pagination, PaginationProps } from 'antd';
import { FC } from 'react';
// import classes from 'assets/css/global.module.scss';

interface ITpPagination extends PaginationProps {
	per_page: number;
	onPaginationHandler: (page?: number, per_page?: number) => void;
}

const TpPagination: FC<ITpPagination> = ({ className, responsive, total = 0, current = 1, onPaginationHandler, per_page = 15, ...props }) => {
	const onChangeHandler = (page?: number, per_page?: number) => {
		onPaginationHandler(page, per_page);
	};

	const maxPageNumber = Math.ceil(total / per_page);

	if (total < 15) return null;

	return (
		<>
			<div className='hidden print:block'>{`صفحه ${current} از ${maxPageNumber || 1}`}</div>
			<div className='print:hidden'>
				<Pagination
					showLessItems={true}
					pageSizeOptions={[15, 30, 45, 70, 100]}
					pageSize={per_page}
					className={`text-left ${className}`}
					responsive={responsive}
					defaultCurrent={1}
					current={current}
					onChange={onChangeHandler}
					total={total}
					showSizeChanger={total > 15}
					{...props}
				/>
			</div>
		</>
	);
};

export default TpPagination;
