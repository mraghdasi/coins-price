import queryString from 'query-string';
import { useRouter } from 'next/router';
import { convertAllPropertyToEnStringNumber, isBrowser } from 'core/utils/default';
import { useEffect, useState } from 'react';

const useMasterQueryUrlParam = () => {
  const { push } = useRouter();
  const search = isBrowser() && window.location.search;
  const pathname = isBrowser() ? window.location.pathname : '';
  const [query, setQuery] = useState<any>(convertAllPropertyToEnStringNumber(queryString.parse(search + '', { arrayFormat: 'comma' })));
  const [filterQuery, setFilterQuery] = useState<string>('');

  const setUrlParam = (newQuery: object, resetQuery?: any) => {
    if (Object.keys(newQuery).length !== 0) {
      setFilterQuery(queryString.stringify(newQuery, { arrayFormat: 'comma' }));
      push(pathname + '?' + queryString.stringify(newQuery, { arrayFormat: 'comma' }), undefined, { shallow: true });
    } else {
      push(pathname);
      resetQuery();
    }
  };

  const resetQuery = (query?: object, clearQuery?: () => void) => {
    push(`${pathname}${query ? `?${queryString.stringify(query)}` : ''}`, undefined, { shallow: true });
    setQuery({});
    setFilterQuery('');

    clearQuery && clearQuery();
  };

  useEffect(() => {
    if (isBrowser()) {
      setQuery(convertAllPropertyToEnStringNumber(queryString.parse(search + '', { arrayFormat: 'comma' })));
    }
  }, [isBrowser(), search]);

  useEffect(() => {
    if (isBrowser()) {
      setFilterQuery(queryString.stringify(query, { arrayFormat: 'comma' }));
    }
  }, [isBrowser(), query]);

  const removeQuery = (queryTitle: string) => {
    const newQuery = query;
    delete newQuery?.[queryTitle];
    setUrlParam({ ...newQuery });
  };

  return {
    query,
    filterQuery,
    removeQuery,
    setUrlParam,
    resetQuery,
    search,
    pathname,
    pathnameArray: isBrowser() ? window.location.pathname.split('/') : [],
  };
};

export default useMasterQueryUrlParam;
