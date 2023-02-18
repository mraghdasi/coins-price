import { useState } from 'react';

const useQueryStatic = () => {
	const [page, setPage] = useState(1);
	const [per_page, setPer_page] = useState(15);
	const [query, setQuery] = useState({});

	const resetQuery = () => {
		setPer_page(15);
		setPage(1);
		setQuery({});
	};

	const handlePagination = (page?: number, per_page?: number) => {
		setPer_page(per_page || 15);
		setPage(page || 1);
		setQuery({ ...query, page: page || 1, per_page: per_page || 15 });
	};

	return {
		query,
		setQuery,
		resetQuery,
		page,
		per_page,
		handlePagination,
	};
};

export default useQueryStatic;
