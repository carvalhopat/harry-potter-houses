import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import api from '../../helpers/axiosInstance'

function useCandidatesList() {
  const [listData, setListData] = useState([] as any);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const savedTypedValue =
  typeof window !== 'undefined' ? localStorage.getItem('searchedValue') : '';

  const {
    query: { termType = 'name'}
  } = useRouter();
  const {
    query } = useRouter();

  const fetchCandidatesList = useCallback(() => {
    setIsLoading(true)
    // if(query.q || query.q == ''){
      api.get('/api/candidates', { params: {
        query: query?.q, termType, page: 1
      }
    })
    .then(({data}) => setListData(data))
    .catch(error => setError(error))
    .finally(() => setIsLoading(false))
    // }
  }, [termType, query])

  const firstRender = useRef(true);

  useEffect(() => {
    // if (firstRender.current) {
    //   console.log('oi')
    //   firstRender.current = false;
    //   return fetchCandidatesList();
    // }

    if(query.q || query.q == ''){
    fetchCandidatesList()
  }
  }, [fetchCandidatesList, query.q])

  // useEffect(() => {
  //   if(!query.q){
  //   fetchCandidatesList()
  // }
  // }, [fetchCandidatesList, query.q])

    const onSearch = ({ q = '' }) => localStorage.setItem('searchedValue', q);

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
    error: !!error,
    onSearch
  };
}

export default useCandidatesList;
