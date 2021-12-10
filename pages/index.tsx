import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lovebook</title>
        <meta name="description" content="Saving your moment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
      </main>
    </div>
  )
}

export default Home
