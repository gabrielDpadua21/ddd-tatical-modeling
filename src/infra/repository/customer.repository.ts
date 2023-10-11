import Customer from '../..//domain/entities/customer'
import CustomerRepositoryInterface from '../..//domain/repository/customer-repository-interface'
import CustomerModel from '../db/sequelize/model/customer.model'

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create (customer: Customer): Promise<void> {
    await CustomerModel.create({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      number: customer.address.number,
      street: customer.address.street,
      complement: customer.address.complement,
      city: customer.address.city,
      state: customer.address.state,
      active: customer.active,
      rewardPoints: customer.rewardPoints
    })
  }

  async update (id: string, customer: Customer): Promise<void> {
    await CustomerModel.update({
      name: customer.name,
      email: customer.email,
      number: customer.address.number,
      street: customer.address.street,
      complement: customer.address.complement,
      city: customer.address.city,
      state: customer.address.state,
      active: customer.active,
      rewardPoints: customer.rewardPoints
    }, { where: { id } })
  }

  async delete (id: string): Promise<number> {
    return await CustomerModel.destroy({ where: { id } })
  }

  async findById (id: string): Promise<Customer> {
    const model = await CustomerModel.findOne({ where: { id } })
    if (!model) throw new Error('Customer not found')
    const costumer = new Customer(model.id, model.name, model.email)
    costumer.changeAddress(model.street, model.number, model.complement, model.city, model.state)
    costumer.toggleActive()
    return costumer
  }

  async findAll (): Promise<Customer[]> {
    const models = await CustomerModel.findAll()
    const customers: Customer[] = []
    models.forEach(model => {
      const costumer = new Customer(model.id, model.name, model.email)
      costumer.changeAddress(model.street, model.number, model.complement, model.city, model.state)
      costumer.toggleActive()
      customers.push(costumer)
    })
    return customers
  }
}
