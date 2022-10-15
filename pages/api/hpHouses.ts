import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../helpers/axiosInstance';
import { isNil } from 'ramda';
import sortList from './_utils/sortList';
import getNewMatches from './_utils/getNewMatches';
import paginateList from './_utils/paginateList';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { query, termType, sort, sortType, page, pageSize, house }
  } = req;

  try {
    const response = await api.get(`https://hp-api.herokuapp.com/api/characters/house/${house}`);
    const candidatesList = response.data;

    const sortedCandidatesList =
      sort === 'asc'
        ? candidatesList.sort(sortList(sortType as string))
        : candidatesList.sort(sortList(sortType as string)).reverse();

    if (!isNil(query)) {
      const newMatches = getNewMatches({ query, data: sortedCandidatesList, termType });
      const paginatedList = paginateList({ pageNumber: page, pageSize, items: newMatches });

      const responseData = newMatches.length < 8 ? newMatches : paginatedList;

      return res.status(200).send({ totalCount: newMatches, data: responseData });
    }

    const paginatedList = paginateList({ pageNumber: page, pageSize, items: sortedCandidatesList });
    return res.status(200).send({ totalCount: candidatesList, data: paginatedList });
  } catch (error) {
    return res.status(500).send({ data: 'Internal Server Error' });
  }
}
