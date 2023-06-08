import MetaData from '@/components/generics/MetaData'
import Layout from '../../layout/Layout'
import { headers } from 'next/dist/client/components/headers'
import Homepage from '@/components/home/Home'
import clientPromise from '@/lib/mongodb';

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
    const client = await clientPromise;
    const db = await client.db()
    const data = await db.collection("products").find({}).toArray()
    const products = JSON.parse(JSON.stringify(data))
    return {
      props: {
        products: products,
      },
    };
  }
