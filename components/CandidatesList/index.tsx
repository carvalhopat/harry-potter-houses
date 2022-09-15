import styles from './CandidatesList.module.scss';
import SearchBar from '../SearchBar';
import useCandidatesList from './useCandidatesList';
import mockedData from '../../pages/mockedData';
import Image from 'next/image';
import Link from 'next/link';

function CandidatesList() {
  const { Table, isLoading, listData, error } = useCandidatesList();

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.search}>
          <h2>Applications</h2>
          <SearchBar />
        </div>
        <div className={styles.logo}>
          <Link href="https://www.personio.com/">
            <Image src="/personio_logo.svg" width="100" height="30" alt="Personio Logo" />
          </Link>
        </div>
        {
          isLoading ? (
            <div className={styles.loaderWrapper}>
              <div className={styles.loader}></div>
            </div>
          ) : error ? (
            <div className={styles.badServer}>
              <div className={styles.errorCode}>500</div>
              <p>Internal Server Error</p>
              <p>Hang in there! We&apos;ll be right back.</p>
            </div>
          ) :
          (
            <div className={styles.list}>
              <Table list={listData} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default CandidatesList;

{
  /* <button onClick={() =>{
    console.log(matches)
    return setMatches(matches.sort( compare ))}
}>Asc</button>
<button onClick={() =>{
    console.log(matches)
    return setMatches(matches.sort( compare ).reverse())}
}>Desc</button> */
}
