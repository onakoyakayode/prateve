import Head from 'next/head'
// import { Inter } from 'next/font/google'
import Homepage from '../components/pages/HomePage/Homepage'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Prateve</title>
        <meta name="Prateve" content="Prateve Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/prateveLogoFoooter.svg" />
      </Head>
      <>
        <Homepage/>
      </>
    </>
  )
}
