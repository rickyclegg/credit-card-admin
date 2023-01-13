import { Store } from './types'
import { CreditCard } from '../model/credit-card'

class MemCardsStore implements Store<CreditCard> {
  private cards: CreditCard[]

  constructor() {
    this.cards = []
  }

  public async getAll() {
    return [...this.cards]
  }

  public async add(item: CreditCard) {
    this.cards.push(item)
  }
}

export default MemCardsStore
