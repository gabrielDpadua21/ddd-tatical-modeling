import Customer from '../entities/customer'
import Order from '../entities/order'
import OrderItem from '../entities/orderItem'
import OrderService from './order.service'
import { v5 as uuid } from 'uuid'

describe('Order service unit tests', () => {
  it('Should place an order', async () => {
    const costumer = new Customer(uuid.toString(), 'costumer 1', 'email')
    const item01 = new OrderItem(uuid.toString(), 'name', 'p1', 100, 1)
    const order = OrderService.placeOrder(costumer, [item01])
    expect(costumer.rewardPoints).toBe(50)
    expect(order.total()).toBe(100)
  })

  it('should get total of all orders', async () => {
    const orderItem = new OrderItem('1', 'name', 'p1', 100, 1)
    const orderItem2 = new OrderItem('2', 'name', 'p2', 200, 2)
    const order = new Order('1', '1', [orderItem], 1)
    const order2 = new Order('2', '2', [orderItem2], 2)
    const total = OrderService.total([order, order2])
    expect(total).toEqual(500)
  })
})
