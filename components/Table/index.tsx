import TListData from '../../types/TListData';
import { isEmpty } from 'ramda';
import styles from './Table.module.scss';
import Image from 'next/image';
import Sort from './Sort';
import cx from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

type TListParams = {
  list: TListData[];
  categories: {
    [key: string]: {
      value: string;
      isSortable?: boolean;
      isNumberCell?: boolean;
      formatter?: (item) => {};
    };
  };
  customClass: string;
};

function Table({ categories, list, customClass }: TListParams) {
  const router = useRouter();

  return (
    <div className={styles.listTable}>
      {isEmpty(list) && router.isReady ? (
        <div className={styles.notFound}>
          <Image src="/search-icon.svg" width="200" height="50" alt="Search not found" />
          <h4>No matching results found.</h4>
          <p>We&apos;re sorry! Please try another way.</p>
        </div>
      ) : list.length > 0 ? (
        <div className={styles.table}>
          <div className={cx(styles.thead, customClass)}>
            {Object.entries(categories).map(([category, { value, isSortable, isNumberCell }]) => {
              return (
                <div
                  key={category}
                  className={cx(styles.theadValue, { [styles.numberCell]: isNumberCell })}
                >
                  {value}
                  {isSortable && <Sort sortType={category} />}
                </div>
              );
            })}
          </div>
          <div className={styles.tbody}>
            {list?.map((item) => {
              const rowItems = Object.entries(categories).reduce(
                (acc, [category, { isNumberCell, formatter }]) => {
                  const value = item[category];
                  const formattedValue = formatter ? formatter({ item }) : value;

                  return [
                    ...acc,
                    <div key={category} className={cx({ [styles.numberCell]: isNumberCell })}>
                      {isEmpty(formattedValue) ? '-' : formattedValue}
                    </div>
                  ];
                },
                [] as any
              );

              return (
                <div key={item.name} className={cx(styles.tableRow, customClass)}>
                  {rowItems}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Table;
