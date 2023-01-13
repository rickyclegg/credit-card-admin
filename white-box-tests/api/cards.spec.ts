import { createMocks } from 'node-mocks-http'
import { handleCards } from '../../src/pages/api/cards'
import { CreditCard, CreditCardDTO } from '../../src/model/credit-card'
import { Store } from '../../src/store/types'

describe('/api/cards', () => {
  describe('GET', () => {
    it('returns an empty list of cards', async () => {
      const { req, res } = createMocks({
        method: 'GET',
      })

      await handleCards(req, res, new FakeStore())

      const { data } = JSON.parse(res._getData())

      expect(res._getStatusCode()).toBe(200)
      expect(data).toHaveLength(0)
    })

    it('adds a new card to the list', async () => {
      const stubStore = new FakeStore()
      stubStore.add = jest.fn()

      const expectedCard: CreditCardDTO = {
        name: 'martin',
        cardNumber: '1111 2222 3333 4444',
        limit: 2000,
      }
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          card: expectedCard,
        },
      })

      await handleCards(req, res, stubStore)

      const postData = JSON.parse(res._getData())

      expect(stubStore.add).toHaveBeenCalledWith(expectedCard)
      expect(res._getStatusCode()).toBe(201)
      expect(postData.data).toEqual(expectedCard.cardNumber)
    })
  })
})

class FakeStore implements Store<CreditCard> {
  async getAll() {
    return []
  }
  async add() {}
}
