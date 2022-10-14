import type { NextPage } from 'next';
import Head from 'next/head';
import HousesList from '../components/HousesList';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Harry Potter Houses - Patrícia Carvalho</title>
        <meta name="description" content="Harry Potter Houses - Patrícia Carvalho" />
        <link rel="icon" href="/glasses.svg" />
      </Head>

      <HousesList />
    </>
  );
};

export default Home;
