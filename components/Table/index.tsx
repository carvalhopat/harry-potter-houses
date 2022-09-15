import TListData from '../../types/TListData';
import { isEmpty } from 'ramda';
import styles from './Table.module.scss';

type TListParams = {
  list: TListData[];
};

function Table({ list }: TListParams) {
  return (
    <div className={styles.listTable}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th className={styles.numberCell}>Age</th>
            <th className={styles.numberCell}>Years of experience</th>
            <th>Position applied</th>
            <th className={styles.numberCell}>Date of application</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {isEmpty(list) ? (
            <p>ops</p>
          ) : (
            list?.map(
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
                    <td className={styles.numberCell}>{birth_date}</td>
                    <td className={styles.numberCell}>{year_of_experience}</td>
                    <td>{position_applied}</td>
                    <td className={styles.numberCell}>{application_date}</td>
                    <td>{status}</td>
                  </tr>
                );
              }
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
