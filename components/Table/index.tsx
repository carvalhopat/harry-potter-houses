import TListData from '../../types/TListData';
import { isEmpty } from 'ramda';
import styles from './Table.module.scss';
import Badge from './Badge';
import Image from 'next/image';
import Sort from './Sort';
import cx from 'classnames';
import { useRouter } from 'next/router';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';

type TListParams = {
  list: TListData[];
  categories: {};
};

type TCategoryProps = {
  isNumberCell: boolean;
  isBadge: boolean;
  isFormattedDate: boolean;
};

function Table({ categories, list }: TListParams) {
  const router = useRouter();
  const getYearsFromDate = (date: string) => moment().diff(date, 'years');

  return (
    <div className={styles.listTable}>
      {isEmpty(list) && router.isReady ? (
        <div className={styles.notFound}>
          <Image src="/search-icon.svg" width="200" height="50" alt="Search not found" />
          <h4>No matching results found.</h4>
          <p>We&apos;re sorry! Please try another way.</p>
        </div>
      ) : list ? (
        <table>
          <thead>
            <tr>
              {Object.entries(categories).map(
                ([category, { value, isSortable, isNumberCell, columnWidth }]: (
                  | string
                  | any
                )[]) => {
                  return (
                    <th
                      key={category}
                      style={{ width: columnWidth }}
                      className={cx({ [styles.numberCell]: isNumberCell })}
                    >
                      <div className={styles.tableHeadValue}>
                        {value}
                        {isSortable && <Sort sortType={category} />}
                      </div>
                    </th>
                  );
                }
              )}
            </tr>
          </thead>
          <tbody>
            {list?.map((item) => {
              const mappedCategory = { name: 'name' };
              const rowItems = Object.entries(categories).reduce(
                (acc, [category, categoryProps]): any => {
                  const value = item[category as keyof typeof mappedCategory];

                  const { isNumberCell, isBadge, isFormattedDate } =
                    categoryProps as TCategoryProps;

                  return [
                    ...acc,
                    <td key={category} className={cx({ [styles.numberCell]: isNumberCell })}>
                      {isBadge ? (
                        <Badge status={value} />
                      ) : isFormattedDate ? (
                        getYearsFromDate(value)
                      ) : (
                        value
                      )}
                    </td>
                  ];
                },
                []
              );

              return (
                <tr key={item.name} className={styles.tableRow}>
                  {rowItems}
                </tr>
              );
            })}
          </tbody>
        </table>
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
    isBadge: PropTypes.bool,
    columnWidth: PropTypes.string
  }).isRequired,
  list: PropTypes.array.isRequired
};

export default Table;
