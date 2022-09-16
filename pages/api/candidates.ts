import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../helpers/axiosInstance';
import { isNil } from 'ramda';
import sortList from './_utils/sortList';
import getNewMatches from './_utils/getNewMatches'
import mockedData from '../../pages/mockedData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { query, termType, sort, sortType }
  } = req;

  try {
    const response = await api.get('http://personio-fe-test.herokuapp.com/api/v1/candidates');
    const candidatesList = response.data;

    const sortedCandidatesList =
      sort === 'asc'
        ? candidatesList.data.sort(sortList(sortType as string))
        : candidatesList.data.sort(sortList(sortType as string)).reverse();

    if (candidatesList?.error?.code === 500) {
      return res.status(500).send({ error: 'Internal Server Error' });
    }

    if (!isNil(query)) {
      const newMatches = getNewMatches({ query, data: sortedCandidatesList, termType });
      return res.status(200).send(newMatches);
    }
    return res.status(200).send(sortedCandidatesList);
  } catch (error) {
    console.log('veio aqui');
    return res.status(500).send({ data: 'Internal Server Error' });
  }
}
