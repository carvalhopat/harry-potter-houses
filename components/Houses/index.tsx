import React from 'react';
import styles from './Houses.module.scss';
import cx from 'classnames';
import useHouses from './useHouses';
import MenuDropdown from '../MenuDropdown';

function Houses() {
  const { selectedHouseColor, selectedHouse, filteredHouses, onSelectHouse, isReady } = useHouses();

  return (
    <div className={styles.housesWrapper}>
      <MenuDropdown
        selectedOption={selectedHouse}
        customClass={cx(styles.selectedHouse, styles[selectedHouseColor])}
      >
        {filteredHouses.map(({ id, house, color }) => {
          return (
            <button
              key={id}
              className={cx(styles.houseButton, styles[color])}
              onClick={() => onSelectHouse({ house })}
            >
              {house}
            </button>
          );
        })}
      </MenuDropdown>
    </div>
  );
}

export default Houses;
