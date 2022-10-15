/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import styles from './Sort.module.scss';
import React from 'react';

type TSortParams = {
  sortType: string;
};

function Sort({ sortType }: TSortParams) {
  const router = useRouter();
  const {
    query: { sortType: category = sortType, sort = 'asc' }
  } = router;

  function Icon({ path, arrow }) {
    return (
      <svg width="8" height="5" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
        <path
          d={path}
          fill={category === sortType && sort === arrow ? '#c97575' : '#AAAAAA'}
          stroke={category === sortType && sort === arrow ? '#c97575' : ''}
        />
      </svg>
    );
  }

  return (
    <div className={styles.sort}>
      <div
        onClick={() => router.push({ query: { ...router.query, sort: 'asc', sortType } })}
        data-testid="sort-asc"
      >
        <Icon path="M6 0L12 6H0L6 0Z" arrow="asc" />
      </div>
      <div
        onClick={() => router.push({ query: { ...router.query, sort: 'desc', sortType } })}
        data-testid="sort-desc"
      >
        <Icon path="M6 6L0 0H12L6 6Z" arrow="desc" />
      </div>
    </div>
  );
}

export default Sort;
