import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import api from '../../helpers/axiosInstance';
import fetchHousesList from '../../helpers/fetchHousesList';

function useCandidatesList() {
  const [listData, setListData] = useState([] as any);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { query } = router;
  const {
    termType = 'name',
    sort = 'asc',
    sortType = 'name',
    page = 1,
    pageSize = 7,
    house = 'gryffindor'
  } = query;

  const fetchHousesData = useCallback(() => {
    setIsLoading(true);
    api
      .get('/api/candidates', {
        params: {
          query: query?.q,
          termType,
          sort,
          sortType,
          page,
          pageSize,
          house
        }
      })
      .then(({ data }) => setListData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [termType, query, sort, sortType, house, page, pageSize]);

  useEffect(() => {
    if (router.isReady) {
      fetchHousesData();
    }
  }, [fetchHousesData, router?.isReady]);

  const Table = dynamic(() => import('../Table'), { ssr: false });

  return {
    Table,
    isLoading,
    listData,
    error: !!error,
    onPageChange: ({ selected }) => router.push({ query: { ...router.query, page: selected + 1 } })
  };
}

export default useCandidatesList;
