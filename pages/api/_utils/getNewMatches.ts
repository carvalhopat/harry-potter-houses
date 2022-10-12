import { includes } from 'ramda';

type TNewMatchesParams = {
  query: string | string[] | any;
  data: [];
  termType: string | string[] | undefined;
};

const mappedTermTypes = {
  name: 'name',
  species: 'species'
};

function getNewMatches({ query, data, termType }: TNewMatchesParams) {
  return data?.filter((item: {}) => {
    return includes(
      query.toLowerCase().trim(),
      item[termType as keyof typeof mappedTermTypes].toLowerCase()
    );
  });
}

export default getNewMatches;
