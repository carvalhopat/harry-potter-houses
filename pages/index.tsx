import type { NextPage } from 'next';
import Head from 'next/head';
import CandidatesList from '../components/CandidatesList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Personio Frontend Challenge - Patrícia Carvalho</title>
        <meta name="description" content="Personio Frontend Challenge - Patrícia Carvalho" />
        <link
          rel="icon"
          href="https://www.personio.com/wp-content/themes/stack-child/assets/img/personio-favicon.svg"
        />
      </Head>

      <CandidatesList />
    </>
  );
};

export default Home;
