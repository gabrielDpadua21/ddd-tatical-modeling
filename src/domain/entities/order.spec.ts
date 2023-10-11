import Order from './order'
import OrderItem from './orderItem'

describe('Order entity', () => {
  test('It should throw an error if id is empty', async () => {
    expect(() => {
      const order = new Order('', '1', [])
      order.total()
    }).toThrowError('Id is required')
  })

  test('It should throw an error if customer id is empty', async () => {
    expect(() => {
      const order = new Order('1', '', [])
      order.total()
    }).toThrowError('CustomerId is required')
  })

  test('It should throw an error if items is empty', async () => {
    expect(() => {
      const order = new Order('1', '1', [])
      order.total()
    }).toThrowError('Does not have items')
  })

  test('It return total price order', async () => {
    const item = new OrderItem('1', 'name', 'p1', 1, 4)
    const item2 = new OrderItem('2', 'name', 'p2', 2, 1)
    const order = new Order('1', '1', [item, item2])
    expect(order.total()).toBe(6)
  })

  test('It shuold return total itens order', async () => {
    const item = new OrderItem('1', 'name', 'p1', 1, 2)
    const item2 = new OrderItem('2', 'name', 'p2', 2, 4)
    const order = new Order('1', '1', [item, item2])
    expect(order.totalItems()).toBe(6)
  })

  test('It should check if quantity is greater than zero', async () => {
    const item = new OrderItem('1', 'name', 'p1', 1, -1)
    const order = new Order('1', '1', [item])
    expect(order.total()).toBe(1)
  })
})
