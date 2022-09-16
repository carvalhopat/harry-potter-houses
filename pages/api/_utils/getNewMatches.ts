import { includes, isNil } from 'ramda';

type TNewMatchesParams = {
  query: string | string[];
  data: [];
  termType: string | string[] | undefined;
};

const mappedTermTypes = {
  name: 'name',
  status: 'status'
};

function getNewMatches({ query, data, termType }: TNewMatchesParams) {
  return data?.filter((item: any) => {
    return includes(query, item[termType as keyof typeof mappedTermTypes].toLowerCase());
  });
}

export default getNewMatches;
