import Booking from '@/components/book/Booking'
import MetaData from '@/components/generics/MetaData'
import Layout from '@/layout/Layout'


export default function Book() {
  let headProps = {
    title: 'Pet-O-Care | Pet Hotel Reservation'
  }
  let pageProps = {
  }
  return (
    <>
      <MetaData {...headProps}/>
      <Layout>
        <Booking {...pageProps} />
      </Layout>
    </>
  )
}