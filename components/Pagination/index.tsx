import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import { useRouter } from 'next/router';

function Pagination({ total, range, onPageChange }) {
  const [forcePage, setForcePage] = useState(1);
  const {
    query: { page }
  } = useRouter();

  useEffect(() => {
    if (page) {
      setForcePage(Number(page));
    }
  }, [page]);

  return (
    <ReactPaginate
      nextLabel=">"
      previousLabel="<"
      forcePage={forcePage - 1}
      onPageChange={onPageChange}
      pageRangeDisplayed={1}
      pageCount={Math.ceil(total / range)}
      containerClassName={styles.paginationWrapper}
      pageClassName={styles.paginationItem}
      previousClassName={styles.paginationItem}
      nextClassName={styles.paginationItem}
      previousLinkClassName={styles.paginationLinkItem}
      nextLinkClassName={styles.paginationLinkItem}
      pageLinkClassName={styles.paginationLinkItem}
      activeLinkClassName={styles.activeItem}
      disabledLinkClassName={styles.disabled}
    />
  );
}

export default Pagination;
