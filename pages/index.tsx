import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import useWindowSize from '../hooks/useWindowSize';
import { Post } from './api/posts';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const { width } = useWindowSize();
  const [data, setData] = useState<Post>();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/posts');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const posts = await response.json();
    console.log(posts);
    return setData(posts);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lovebook</title>
        <meta name="description" content="Saving your moment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.page}>
        <Header />
        <main className={styles.main}>
          <section className={styles.mainContainer}>
            <div className={styles.content} style={{ left: (width + 642) / 2 }}>
              Main Content
            </div>
            <div className={styles.sidebar} style={{ left: (width + 642) / 2 }}>
              Sidebar
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Home;
