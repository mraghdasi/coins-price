import { useEffect, useState } from 'react';
import useMasterQueryUrlParam from './useMasterQueryParam';

const useQueryParam = () => {
  const { filterQuery, ...props } = useMasterQueryUrlParam();

  const [filterParams, setFilterParams] = useState(filterQuery);

  useEffect(() => {
    setFilterParams(filterQuery);
  }, [filterQuery]);

  return { ...props, filterParams };
};

export default useQueryParam;
