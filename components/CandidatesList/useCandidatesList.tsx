import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import api from '../../helpers/axiosInstance';

function useCandidatesList() {
  const [listData, setListData] = useState([] as any);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { query } = router;
  const { termType = 'name', sort = 'asc', sortType = 'name' } = query;

  const fetchCandidatesList = useCallback(() => {
    setIsLoading(true);
    api
      .get('/api/candidates', {
        params: {
          query: query?.q,
          termType,
          sort,
          sortType
        }
      })
      .then(({ data }) => setListData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [termType, query, sort, sortType]);

  useEffect(() => {
    if (router.isReady) {
      fetchCandidatesList();
    }
  }, [fetchCandidatesList, router.isReady]);

  const Table = dynamic(() => import('../Table'), { ssr: false });

  return {
    Table,
    isLoading,
    listData,
    error: !!error,
    setListData
  };
}

export default useCandidatesList;
