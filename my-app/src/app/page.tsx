// src/app/page.tsx

import Head from 'next/head';
import styles from './page.module.css';
import Header from '../components/component/header01';
import {ProfileSection} from '../components/component/profile-section';
import {SidePanelLeft01} from '../components/component/side-panel-left01';
import {Button} from '@/components/ui/button';
import {Card} from '../components/ui/card';
import {Avatar} from '@/components/ui/avatar';

export default function Home() {
  return (
      <>
        <Head>
          <title>My App Homepage</title>
          <meta name="description" content="Welcome to my app homepage" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
          <SidePanelLeft01 />
          <div className={styles.content}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <p className={styles.description}>
              Get started by editing <code className={styles.code}>src/app/page.tsx</code>
            </p>
            <ProfileSection />
            <div className={styles.grid}>
              <Card className={styles.card}>
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </Card>
              <Card className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </Card>
            </div>
            <Button>Click Me</Button>
            <Avatar />
          </div>
          <SidePanelLeft02 />
        </main>
      </>
  );
}
