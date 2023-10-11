import Order from '../../domain/entities/order'
import OrderRepositoryInterface from '../../domain/repository/order-repository-interface'
import OrderModel from '../db/sequelize/model/order.model'
import OrderItemModel from '../db/sequelize/model/order-item.model'

export default class OrderRepository implements OrderRepositoryInterface {
  async create (data: Order): Promise<void> {
    await OrderModel.create({
      id: data.id,
      customerId: data.customerId,
      total: data.total(),
      items: data.items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      include: [{ model: OrderItemModel }]
    })
  }

  async update (id: string, data: Order): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async delete (id: string): Promise<number> {
    throw new Error('Method not implemented.')
  }

  async findById (id: string): Promise<Order> {
    throw new Error('Method not implemented.')
  }

  async findByIdWithItems (id: string): Promise<Order> {
    const model = await OrderModel.findOne({ where: { id }, include: ['items'] })
    if (!model) throw new Error('Order not found')
    return new Order(model.id, model.customerId, [])
  }

  async findAll (): Promise<Order[]> {
    throw new Error('Method not implemented.')
  }
}
