import styles from './CandidatesList.module.scss';
import SearchBar from '../SearchBar';
import useCandidatesList from './useCandidatesList';
import Image from 'next/image';
import Link from 'next/link';
import categories from './categories';
import React from 'react';
import Houses from '../Houses';

function CandidatesList() {
  const { Table, isLoading, listData, error } = useCandidatesList();

  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.search}>
          <h2>
            <Image src="/manage-applications.svg" width="30" height="30" alt="Search not found" />{' '}
            Manage Applications
          </h2>
          <SearchBar />
        </div>
        <Houses />
        <div className={styles.logo}>
          <Link href="https://">
            <Image src="/logo.svg" width="120" height="30" alt="Logo" />
          </Link>
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
            <Table categories={categories} list={listData} customClass={styles.tableColumnsWidth} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CandidatesList;
