import React from 'react';
import Head from 'next/head';

export default function MetaData ({title, description}) {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="title" content={ title }/>
        </Head>
    </>
  );
};