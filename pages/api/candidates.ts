import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../helpers/axiosInstance';
import { includes, toLower, isEmpty, isNil } from 'ramda';

type TData = {
  name: string;
};

type TNewMacthesParams = {
  query: string;
  data: [];
  termType: string | string[] | undefined;
};

const mappedTermTypes = {
  name: 'name',
  status: 'status'
};

const getNewMatches = ({query, data, termType}: TNewMacthesParams) => {
  console.log({query, data, termType})
  return data?.filter((item: any) => {
      return includes(query, item[termType as keyof typeof mappedTermTypes].toLowerCase());
    })}

export default async function handler(req: NextApiRequest, res: NextApiResponse<TData>) {
  const {query: {query, termType, page}} = req;

  try {
    const response = await api.get('http://personio-fe-test.herokuapp.com/api/v1/candidates');
    const candidatesList = response.data;

    if(candidatesList?.error?.code === 500){
      console.log('caiu')
      return res.status(500).send({error: 'Internal Server Error'})
    }

    if (!isNil(query)) {
      console.log('caiu2')
      const newMatches = getNewMatches({query, data: candidatesList.data, termType});
      console.log(newMatches)
      return res.status(200).send(newMatches);
    } 
    console.log('caiu3')
    return res.status(200).send(candidatesList.data);
  } catch (error) {
    return res.status(500).send({data: 'Internal Server Error'})
  }
}
