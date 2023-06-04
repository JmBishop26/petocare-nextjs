import MetaData from '@/components/shared/MetaData'
import Layout from '../../layout/Layout'
import { headers } from 'next/dist/client/components/headers'
import Homepage from '@/components/home/Home'

export default function Home() {
  let headProps = {
    title: 'Pet-O-Care | Home'
  }
  return (
    <>
      <MetaData {...headProps}/>
      <Layout>
        <Homepage />
      </Layout>
    </>
  )
}
