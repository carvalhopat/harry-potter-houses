import React, { useState, useRef, useEffect } from 'react';
import styles from './Houses.module.scss';
import { useRouter } from 'next/router';
import cx from 'classnames';
import Image from 'next/image';

const listedHouses = [
  { id: 1, house: 'Gryffindor', color: 'red' },
  { id: 2, house: 'Ravenclaw', color: 'blue' },
  { id: 3, house: 'Hufflepuff', color: 'yellow' },
  { id: 4, house: 'Slytherin', color: 'green' }
];

function Houses() {
  const router = useRouter();
  const [showHouses, setShowHouses] = useState(false);
  const selectedHouse = router.query.house || 'Gryffindor';

  const filteredHouses = listedHouses.filter(({ house }) => house !== selectedHouse);
  const selectedHouseColor = listedHouses.find(({ house }) => house === selectedHouse).color;

  const ref = useRef(null);
  console.log(ref.current);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowHouses(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, showHouses]);

  return (
    <div className={styles.housesWrapper}>
      <div
        className={cx(styles.selectedHouse, styles[selectedHouseColor])}
        onClick={() => setShowHouses(!showHouses)}
      >
        {selectedHouse}
        <Image src="/arrow-down.svg" width="10" height="10" alt="Open house's menu" />
      </div>
      {/* {showHouses && ( */}
      <div className={cx(styles.menuOptions, { [styles.showMenu]: showHouses })} ref={ref}>
        {filteredHouses.map(({ id, house, color }) => {
          return (
            <button
              key={id}
              className={cx(styles.houseButton, styles[color])}
              onClick={() => {
                router.push({ query: { ...router.query, house, page: 1 } });
                setShowHouses(false);
              }}
            >
              {house}
            </button>
          );
        })}
      </div>
      {/* )} */}
    </div>
  );
}

export default Houses;
