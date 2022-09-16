import styles from './CandidatesList.module.scss';
import SearchBar from '../SearchBar';
import useCandidatesList from './useCandidatesList';
import Image from 'next/image';
import Link from 'next/link';
import categories from './categories';

function CandidatesList() {
  const { Table, isLoading, listData, error, onSearch } = useCandidatesList();

  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.search}>
          <h2>Applications</h2>
          <SearchBar />
        </div>
        <div className={styles.logo}>
          <Link href="https://www.personio.com/">
            <Image src="/personio_logo.svg" width="100" height="30" alt="Personio Logo" />
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
            <Table categories={categories} list={listData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CandidatesList;
