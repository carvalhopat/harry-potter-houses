import TListData from '../../types/TListData';
import { isEmpty } from 'ramda';
import styles from './Table.module.scss';
import Badge from './Badge';
import Image from 'next/image';
import Sort from './Sort';
import cx from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';

type TListParams = {
  list: TListData[];
  categories: {};
  customClass: string;
};

type TCategoryProps = {
  isNumberCell: boolean;
  formatter: (item) => {};
};

type TRowProps = {
  data: any;
  index: number;
  style: any;
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
          <div className={styles.thead}>
            <div className={cx(styles.tr, customClass)}>
              {Object.entries(categories).map(
                ([category, { value, isSortable, isNumberCell }]: (string | any)[]) => {
                  return (
                    <div
                      key={category}
                      className={cx(styles.td, { [styles.numberCell]: isNumberCell })}
                    >
                      <div className={styles.tableHeadValue}>
                        {value}
                        {isSortable && <Sort sortType={category} />}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className={styles.tbody}>
            {list?.map((item) => {
              const mappedCategory = { name: 'name' };
              const rowItems = Object.entries(categories).reduce(
                (acc, [category, categoryProps]): any => {
                  const value = item[category as keyof typeof mappedCategory];

                  const { isNumberCell, formatter } = categoryProps as TCategoryProps;
                  const formattedValue = formatter ? formatter({ item }) : value;

                  return [
                    ...acc,
                    <div
                      key={category}
                      className={cx(styles.td, { [styles.numberCell]: isNumberCell })}
                    >
                      {isEmpty(formattedValue) ? '-' : formattedValue}
                    </div>
                  ];
                },
                []
              );

              return (
                <div key={item.name} className={cx(styles.tr, styles.tableRow, customClass)}>
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

Table.propTypes = {
  categories: PropTypes.shape({
    value: PropTypes.string,
    isSortable: PropTypes.bool,
    isNumberCell: PropTypes.bool,
    isBadge: PropTypes.bool
  }).isRequired,
  list: PropTypes.array.isRequired,
  customClass: PropTypes.string
};

export default Table;
