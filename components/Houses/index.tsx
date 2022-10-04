import React from 'react';
import styles from './Houses.module.scss';
import { useRouter } from 'next/router';

const listedHouses = [
  { id: 1, house: 'Gryffindor', color: 'red' },
  { id: 2, house: 'Ravenclaw', color: 'blue' },
  { id: 3, house: 'Hufflepuff', color: 'yellow' },
  { id: 4, house: 'Slytherin', color: 'green' }
];

function Houses() {
  const router = useRouter();

  return listedHouses.map(({ id, house, color }) => {
    return (
      <button
        key={id}
        className={styles[color]}
        onClick={() => router.push({ query: { ...router.query, house: 'ravenclaw' } })}
      >
        {house}
      </button>
    );
  });
}

export default Houses;
