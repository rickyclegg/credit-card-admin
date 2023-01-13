export type CreditCard = {
  name: string
  cardNumber: string
  limit: number
  balance: number
}

export type CreditCardDTO = Omit<CreditCard, 'balance'>
