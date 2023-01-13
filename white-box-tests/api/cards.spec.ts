import { createMocks } from 'node-mocks-http'
import getCards from '../../pages/api/cards'

describe('GET /api/cards', () => {
  it('returns an empty list of cards', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    })

    await getCards(req, res)

    const { items } = JSON.parse(res._getData())

    expect(res._getStatusCode()).toBe(200)
    expect(items).toHaveLength(0)
  })
})
