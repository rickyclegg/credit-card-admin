import type { NextApiRequest, NextApiResponse } from 'next'
import { CreditCard } from '../../src/model/credit-card'
import MemCardsStore from '../../src/store/cards-store'
import { Store } from '../../src/store/types'

type Data = {
  data: CreditCard[] | CreditCard['cardNumber']
}

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
  return handleCards(req, res, new MemCardsStore())
}
