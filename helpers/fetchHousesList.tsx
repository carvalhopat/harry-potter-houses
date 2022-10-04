import api from './axiosInstance';

const fetchHousesList = ({ query, termType, sort, sortType, house }) =>
  api.get('/api/candidates', {
    params: {
      query,
      termType,
      sort,
      sortType,
      house
    }
  });

export default fetchHousesList;
