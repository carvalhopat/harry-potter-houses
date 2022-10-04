import type { NextPage } from 'next';
import Head from 'next/head';
import CandidatesList from '../components/CandidatesList';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Harry Potter Houses - Patrícia Carvalho</title>
        <meta name="description" content="Harry Potter Houses - Patrícia Carvalho" />
        <link rel="icon" href="favicon.svg" />
      </Head>

      <CandidatesList />
    </>
  );
};

export default Home;
