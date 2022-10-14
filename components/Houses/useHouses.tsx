import { useRouter } from 'next/router';

const listedHouses = [
  { id: 1, house: 'Gryffindor', color: 'red' },
  { id: 2, house: 'Ravenclaw', color: 'blue' },
  { id: 3, house: 'Hufflepuff', color: 'yellow' },
  { id: 4, house: 'Slytherin', color: 'green' }
];

function useHouses() {
  const router = useRouter();
  const selectedHouse = router.query.house || 'Gryffindor';

  const filteredHouses = listedHouses.filter(({ house }) => house !== selectedHouse);
  const selectedHouseColor =
    listedHouses.find(({ house }) => house === selectedHouse)?.color || 'red';

  return {
    selectedHouseColor,
    selectedHouse,
    filteredHouses,
    isReady: router.isReady,
    onSelectHouse: ({ house }) =>
      typeof window !== 'undefined' && router.push({ query: { ...router.query, house, page: 1 } })
  };
}

export default useHouses;
