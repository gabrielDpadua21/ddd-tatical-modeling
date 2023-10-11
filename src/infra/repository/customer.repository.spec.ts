import { Sequelize } from 'sequelize-typescript'
import CustomerModel from '../db/sequelize/model/customer.model'
import CustomerRepository from './customer.repository'
import Customer from '../..//domain/entities/customer'

describe('Customer repository unit tests', () => {
  let sequelize: Sequelize
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })

    sequelize.addModels([CustomerModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a customer', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'name', 'email')
    customer.changeAddress('street', 1, 'complement', 'city', 'state')
    customer.toggleActive()
    await customerRepository.create(customer)
    const newCustomer = await customerRepository.findById(customer.id)
    expect(JSON.stringify(customer)).toStrictEqual(JSON.stringify(newCustomer))
  })

  it('should update a customer', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'name', 'email')
    customer.changeAddress('street', 1, 'complement', 'city', 'state')
    customer.toggleActive()
    await customerRepository.create(customer)
    customer.changeName('new name')
    await customerRepository.update(customer.id, customer)
    const newCustomer = await customerRepository.findById(customer.id)
    expect(JSON.stringify(customer)).toStrictEqual(JSON.stringify(newCustomer))
  })

  it('should delete a customer', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('1', 'name', 'email')
    customer.changeAddress('street', 1, 'complement', 'city', 'state')
    customer.toggleActive()
    await customerRepository.create(customer)
    const deleted = await customerRepository.delete(customer.id)
    expect(deleted).toBe(1)
  })

  it('should throw an error when customer not found', async () => {
    const customerRepository = new CustomerRepository()
    await expect(customerRepository.findById('1')).rejects.toThrow('Customer not found')
  })

  it('should find all customers', async () => {
    const customerRepository = new CustomerRepository()
    const customer1 = new Customer('1', 'name', 'email')
    customer1.changeAddress('street', 1, 'complement', 'city', 'state')
    customer1.toggleActive()
    const customer2 = new Customer('2', 'name', 'email')
    customer2.changeAddress('street', 1, 'complement', 'city', 'state')
    customer2.toggleActive()
    await customerRepository.create(customer1)
    await customerRepository.create(customer2)
    const customers = await customerRepository.findAll()
    expect(customers.length).toBe(2)
  })
})
