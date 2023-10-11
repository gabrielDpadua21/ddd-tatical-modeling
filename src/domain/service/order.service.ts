import Customer from '../entities/customer'
import Order from '../entities/order'
import OrderItem from '../entities/orderItem'
import { v5 as uuid } from 'uuid'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class OrderService {
  public static placeOrder (customer: Customer, items: OrderItem[]): Order {
    if (items.length === 0) throw new Error('Does not have items')
    const order = new Order(uuid.toString(), customer.id, items, 1)
    customer.addRewardPoints(order.total() / 2)
    return order
  }

  public static total (orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0)
  }
}
