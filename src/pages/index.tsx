import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreditCard } from '../model/credit-card'

type FormValues = {
  addName: string
  addCardNumber: string
  addLimit: number
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const [cards, setCards] = useState<CreditCard[] | null>()

  const refreshCards = () => {
    fetch('/api/cards')
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data)
      })
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        card: {
          name: data.addName,
          cardNumber: data.addCardNumber,
          limit: data.addLimit,
          balance: 0,
        },
      }),
    }).then(() => {
      refreshCards()
    })
  }

  useEffect(() => {
    refreshCards()
  }, [])

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input {...register('addName', { required: true })} />
          {errors.addName && <span>This field is required</span>}

          <label>Card number</label>
          <input {...register('addCardNumber', { required: true })} />
          {errors.addCardNumber && <span>This field is required</span>}

          <label>Limit</label>
          <input {...register('addLimit', { required: true })} />
          {errors.addLimit && <span>This field is required</span>}

          <input type="submit" value="Add" />
        </form>
        <h2>Existing Cards</h2>
        {!cards && <p data-testid="loadingCards">Loading cards...</p>}
        {cards && !cards.length && <p data-testid="no-cards-warning">No cards in the system</p>}
        {cards && cards.length > 0 && (
          <table id="cardsTable">
            <tr>
              <th>Name</th>
              <th>Card Number</th>
              <th>Balance</th>
              <th>Limit</th>
            </tr>
            {cards.map((card) => (
              <tr key={card.cardNumber}>
                <td data-testid="cardName">{card.name}</td>
                <td data-testid="cardNumber">{card.cardNumber}</td>
                <td data-testid="cardBalance">??{card.balance}</td>
                <td data-testid="cardLimit">??{card.limit}</td>
              </tr>
            ))}
          </table>
        )}
      </main>
    </>
  )
}
