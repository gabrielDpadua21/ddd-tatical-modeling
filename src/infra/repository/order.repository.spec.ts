import { Sequelize } from 'sequelize-typescript'
import CustomerModel from '../db/sequelize/model/customer.model'
import OrderModel from '../db/sequelize/model/order.model'
import OrderItemModel from '../db/sequelize/model/order-item.model'
import ProductModel from '../db/sequelize/model/product.model'
import Customer from '../../domain/entities/customer'
import CustomerRepository from './customer.repository'
import ProductRepository from './product.repository'
import Product from '../../domain/entities/product'
import OrderItem from '../../domain/entities/orderItem'
import OrderRepository from './order.repository'
import Order from '../../domain/entities/order'

describe('Order repository unit tests', () => {
  let sequelize: Sequelize
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })

    sequelize.addModels([CustomerModel, OrderModel, OrderItemModel, ProductModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it.skip('should create a new order', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'name', 'email')
    customer.changeAddress('street', 1, 'complement', 'city', 'state')
    customer.toggleActive()
    const productRepository = new ProductRepository()
    const product = new Product('1', 'name', 'description', 10)
    await customerRepository.create(customer)
    await productRepository.create(product)
    const orderItem = new OrderItem('1', product.name, product.id, product.price, 2)
    const orderRepository = new OrderRepository()
    const order = new Order('1', customer.id, [orderItem])
    await orderRepository.create(order)
    const orderModel = await orderRepository.findById(order.id)
    expect(orderModel?.total).toBe(20)
  })

  it.skip('should update an order', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'name', 'email')
    customer.changeAddress('street', 1, 'complement', 'city', 'state')
    customer.toggleActive()
    const productRepository = new ProductRepository()
    const product = new Product('1', 'name', 'description', 10)
    await customerRepository.create(customer)
    await productRepository.create(product)
    const orderItem = new OrderItem('1', product.name, product.id, product.price, 2)
    const orderRepository = new OrderRepository()
    const order = new Order('1', customer.id, [orderItem])
    await orderRepository.create(order)
    await orderRepository.update(order.id, order)
    const orderModel = await orderRepository.findById(order.id)
    expect(orderModel?.total).toBe(30)
  })

  it.skip('should delete an order', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'name', 'email')
    customer.changeAddress('street', 1, 'complement', 'city', 'state')
    customer.toggleActive()
    const productRepository = new ProductRepository()
    const product = new Product('1', 'name', 'description', 10)
    await customerRepository.create(customer)
    await productRepository.create(product)
    const orderItem = new OrderItem('1', product.name, product.id, product.price, 2)
    const orderRepository = new OrderRepository()
    const order = new Order('1', customer.id, [orderItem])
    await orderRepository.create(order)
    const deleted = await orderRepository.delete(order.id)
    expect(deleted).toBe(1)
  })

  it.skip('should find an order by id', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'name', 'email')
    customer.changeAddress('street', 1, 'complement', 'city', 'state')
    customer.toggleActive()
    const productRepository = new ProductRepository()
    const product = new Product('1', 'name', 'description', 10)
    await customerRepository.create(customer)
    await productRepository.create(product)
    const orderItem = new OrderItem('1', product.name, product.id, product.price, 2)
    const orderRepository = new OrderRepository()
    const order = new Order('1', customer.id, [orderItem])
    await orderRepository.create(order)
    const orderModel = await orderRepository.findById(order.id)
    expect(orderModel?.id).toBe(order.id)
  })

  it.skip('should find an order by id with items', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'name', 'email')
    customer.changeAddress('street', 1, 'complement', 'city', 'state')
    customer.toggleActive()
    const productRepository = new ProductRepository()
    const product = new Product('1', 'name', 'description', 10)
    await customerRepository.create(customer)
    await productRepository.create(product)
    const orderItem = new OrderItem('1', product.name, product.id, product.price, 2)
    const orderRepository = new OrderRepository()
    const order = new Order('1', customer.id, [orderItem])
    await orderRepository.create(order)
    const orderModel = await orderRepository.findByIdWithItems(order.id)
    expect(orderModel?.items[0].name).toBe(order.items[0].name)
  })
})
