import { useRouter } from 'next/router';
import styles from './Sort.module.scss';
import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import React from 'react';

type TSortParams = {
  sortType: string;
};

function Sort({ sortType }: TSortParams) {
  const router = useRouter();
  const {
    query: { sortType: category, sort }
  } = router;

  return (
    <div className={styles.sort}>
      <div
        className={cx({ [styles.selected]: category === sortType && sort === 'asc' })}
        onClick={() => router.push({ query: { ...router.query, sort: 'asc', sortType } })}
        data-testid="sort-asc"
      >
        <Image src="/arrow-up.svg" width="8" height="5" alt="Arrow up" />
      </div>
      <div
        className={cx({ [styles.selected]: category === sortType && sort === 'desc' })}
        onClick={() => router.push({ query: { ...router.query, sort: 'desc', sortType } })}
        data-testid="sort-desc"
      >
        <Image src="/arrow-down.svg" width="8" height="5" alt="Arrow down" />
      </div>
    </div>
  );
}

Sort.propTypes = {
  sortType: PropTypes.oneOf(['position_applied', 'year_of_experience', 'application_date'])
    .isRequired
};

export default Sort;
