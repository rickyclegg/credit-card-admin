import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Credit Card System</title>
        <meta name="description" content="Admin area for Credit Cards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Credit Card System</h1>
        <h2>Add</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"/>
          <label htmlFor="cardNumber">Card number</label>
          <input type="text" id="cardNumber" name="cardNumber"/>
          <label htmlFor="limit">Limit</label>
          <input type="text" id="limit" name="limit"/>
          <input type="submit" value="Add"/>
        </form>
        <h2>Existing Cards</h2>
        <p data-testid="no-cards-warning">No cards in the system</p>
      </main>
    </>
  )
}
