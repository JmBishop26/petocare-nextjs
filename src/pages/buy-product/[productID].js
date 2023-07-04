import React from 'react'
import { useRouter } from 'next/router'
import MetaData from '@/components/generics/MetaData'

import BuyPage from '@/components/buy/BuyProduct'
import Layout from '@/layout/Layout'
import { ObjectId } from 'mongodb'
import MongoConnection from '@/lib/mongodb'

export default function Home({product, error}) {
  
  let headProps = {
    title: 'Pet-O-Care | Home'
  }
  let pageProps = {
    product: product, 
    error: error
  }
  return (
    <>
      <MetaData {...headProps}/>
      <Layout>
        <BuyPage {...pageProps}/>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const mongo = new MongoConnection()
  const client = mongo.connection()
  const db = client.db()

  const id = context.query.productID

    try {
      const data = await db.collection("products").find({_id: new ObjectId(id)}).toArray()
      const item = JSON.parse(JSON.stringify(data))

      return {
        props: {
          product: item,
        },
      };
    } catch (error) {
    }finally{
      await client.close();
    }
}
