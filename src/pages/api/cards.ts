import type { NextApiRequest, NextApiResponse } from 'next'
import { CreditCard } from '../../model/credit-card'
import MemCardsStore from '../../store/cards-store'
import { Store } from '../../store/types'

type Data = {
  data: CreditCard[] | CreditCard['cardNumber']
}

const inMemoryStore = new MemCardsStore()

export const handleCards = async (req: NextApiRequest, res: NextApiResponse<Data>, store: Store<CreditCard>) => {
  if (req.method === 'GET') {
    return res.status(200).json({ data: await store.getAll() })
  } else if (req.method === 'POST') {
    const { card } = req.body

    await store.add(card)

    return res.status(201).json({ data: card.cardNumber })
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return handleCards(req, res, inMemoryStore)
}
