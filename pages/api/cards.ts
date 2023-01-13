import type { NextApiRequest, NextApiResponse } from 'next'
import { CreditCard } from '../../src/model/credit-card'

type Data = {
  items: CreditCard[]
}

export default function getCards(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ items: [] })
}
