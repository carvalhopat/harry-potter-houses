/* eslint-disable @next/next/no-img-element */
import styles from './CandidatesList.module.scss';
import SearchBar from '../SearchBar';
import useCandidatesList from './useCandidatesList';
import Image from 'next/image';
import categories from './categories';
import React from 'react';
import Houses from '../Houses';
import Pagination from '../Pagination';

function CandidatesList() {
  const { Table, isLoading, listData, error, onPageChange } = useCandidatesList();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerGrid}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <div className={styles.title}>
                <Image src="/glasses.svg" width="35" height="17" alt="Harry's glasses" />
                Harry Potter
              </div>{' '}
              <p>
                houses &nbsp;list
                <img src="/lightning.svg" width="18" height="18" alt="Lightning" />
              </p>
            </div>
            <div className={styles.search}>
              {/* <p className={styles.description}>Choose a filter:</p> */}
              <SearchBar />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.house}>
              {/* <p className={styles.description}>Choose a house:</p> */}
              <Houses />
            </div>
          </div>
          {isLoading ? (
            <div className={styles.loaderWrapper}>
              <div className={styles.loader}></div>
            </div>
          ) : error ? (
            <div className={styles.badServer}>
              <Image src="/error-icon.svg" width="200" height="50" alt="Internal Server Error" />
              <h4>Oops! An error has occurred.</h4>
              <p>Hang in there! We&apos;re working to fix the issues.</p>
            </div>
          ) : (
            <div className={styles.list}>
              <Table
                categories={categories}
                list={listData.data ?? []}
                customClass={styles.tableColumnsWidth}
              />
            </div>
          )}
        </div>
      </div>
      <Pagination total={listData.totalCount?.length} range={7} onPageChange={onPageChange} />
    </>
  );
}

export default CandidatesList;
