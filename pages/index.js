import Head from 'next/head'
import Structure from '../components/Structure'
import { metaDetails } from '../data/data'
metaDetails
export default function Home() {
  return (
    <>
      <Head>
        <title>
          {metaDetails.title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Structure />
    </>
  )
}
