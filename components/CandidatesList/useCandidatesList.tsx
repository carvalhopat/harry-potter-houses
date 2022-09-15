import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { includes, toLower, isEmpty } from 'ramda';
import dynamic from 'next/dynamic';
import TListData from '../../types/TListData';
import api from '../../helpers/axiosInstance'

const mappedTermTypes = {
  name: 'name',
  status: 'status'
};

function useCandidatesList() {
  const [listData, setListData] = useState([] as any);
  const [error, setError] = useState([] as any);
  const [isLoading, setIsLoading] = useState(false);

  const savedTypedValue =
  typeof window !== 'undefined' ? localStorage.getItem('searchedValue') : '';
  const {
    query: { termType = 'name', q = savedTypedValue }
  } = useRouter();

  const fetchCandidatesList = useCallback(() => {
    setIsLoading(true)
    api.get('/api/candidates', { params: {
      query: q, termType, page: 1
      }
    })
    .then(({data}) => setListData(data))
    .catch(error => setError(error))
    .finally(() => setIsLoading(false))
  }, [q,termType])

  useEffect(() => {
    fetchCandidatesList()
  }, [fetchCandidatesList])

  // function compare(a: any, b: any ) {
  //   if ( a.name < b.name ){
  //     return -1;
  //   }
  //   if ( a.name > b.name ){
  //     return 1;
  //   }
  //   return 0;
  // }

  const Table = dynamic(() => import('../Table'), { ssr: false });

  return {  
    Table, 
    isLoading, 
    listData, 
    error: listData?.code === 500 || error };
}

export default useCandidatesList;
