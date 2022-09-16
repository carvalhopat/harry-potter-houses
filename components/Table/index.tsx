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
      ) : (
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
            {list?.map(
              ({
                name,
                status,
                email,
                birth_date,
                year_of_experience,
                position_applied,
                application_date
              }: TListData) => {
                return (
                  <tr key={name} className={styles.tableRow}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td className={styles.numberCell}>{getYearsFromDate(birth_date)}</td>
                    <td className={styles.numberCell}>{year_of_experience}</td>
                    <td>{position_applied}</td>
                    <td className={styles.numberCell}>{application_date}</td>
                    <td>
                      <Badge status={status} />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

Table.propTypes = {
  categories: PropTypes.shape({
    value: PropTypes.string,
    isSortable: PropTypes.bool,
    isNumberCell: PropTypes.bool,
    columnWidth: PropTypes.string
  }).isRequired,
  list: PropTypes.array.isRequired
};

export default Table;
