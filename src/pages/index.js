import MetaData from '@/components/generics/MetaData'
import Layout from '../../layout/Layout'

import Homepage from '@/components/home/Home'
import MongoConnection from '@/lib/mongodb'
// import clientPromise from '@/lib/mongodb';

export default function Home({products}) {
  let headProps = {
    title: 'Pet-O-Care | Home'
  }
  let pageProps = {
    products:products
  }
  return (
    <>
      <MetaData {...headProps}/>
      <Layout>
        <Homepage {...pageProps} />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const mongo = new MongoConnection()
  const client = mongo.connection()
  const db = client.db()
    try {
      const data = await db.collection("products").find({}).limit(5).toArray()
      const products = JSON.parse(JSON.stringify(data))
      return {
        props: {
          products: products,
        },
      };
    } catch (error) {
      
    }finally{
      await client.close();
    }
  }
