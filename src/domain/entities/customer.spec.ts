import Customer from './customer'

describe('Customer entity', () => {
  test('It should throw an error if id is empty', async () => {
    expect(() => {
      const customer = new Customer('', 'name', 'email')
      customer.changeAddress('street', 1, 'complement', 'city', 'state')
    }).toThrowError('Id is required')
  })

  test('It should throw an error if name is empty', async () => {
    expect(() => {
      const customer = new Customer('1', '', 'email')
      customer.changeAddress('street', 1, 'complement', 'city', 'state')
    }).toThrowError('Name is required')
  })

  test('It should throw an error if email is empty', async () => {
    expect(() => {
      const customer = new Customer('1', 'name', '')
      customer.changeAddress('street', 1, 'complement', 'city', 'state')
    }).toThrowError('Email is required')
  })

  test('It should change the name', async () => {
    const customer = new Customer('1', 'name', 'email')
    customer.changeName('new name')
    expect(customer.name).toBe('new name')
  })

  test('It should active the customer', async () => {
    const customer = new Customer('1', 'name', 'email')
    customer.toggleActive()
    expect(customer.active).toBe(true)
  })

  test('It should deactivate the customer', async () => {
    const customer = new Customer('1', 'name', 'email')
    customer.toggleActive()
    customer.toggleActive()
    expect(customer.active).toBe(false)
  })

  test('Should add reward pointer', async () => {
    const customer = new Customer('1', 'name', 'email')
    customer.addRewardPoints(10)
    expect(customer.rewardPoints).toBe(10)
  })
})
