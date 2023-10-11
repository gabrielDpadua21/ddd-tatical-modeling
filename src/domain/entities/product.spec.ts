import Product from './product'

describe('Product entity', () => {
  test('It should throw an error if id is empty', async () => {
    expect(() => {
      const product = new Product('', 'name', 'description', 1)
      expect(product.name).toEqual('name')
    }).toThrowError('Id is required')
  })

  test('It should throw an error if name is empty', async () => {
    expect(() => {
      const product = new Product('1', '', 'description', 1)
      expect(product.name).toEqual('name')
    }).toThrowError('Name is required')
  })

  test('It should throw an error if description is empty', async () => {
    expect(() => {
      const product = new Product('1', 'name', '', 1)
      expect(product.name).toEqual('name')
    }).toThrowError('Description is required')
  })

  test('It should throw an error if price is less than or equal 0', async () => {
    expect(() => {
      const product = new Product('1', 'name', 'description', 0)
      expect(product.name).toEqual('name')
    }).toThrowError('Price is required')
  })

  test('It should change the name', async () => {
    const product = new Product('1', 'name', 'description', 1)
    product.changeName('new name')
    expect(product.name).toEqual('new name')
  })

  test('It should change the descriptions', async () => {
    const product = new Product('1', 'name', 'description', 1)
    product.changeDescription('new description')
    expect(product.description).toEqual('new description')
  })

  test('It should change the price', async () => {
    const product = new Product('1', 'name', 'description', 10)
    product.changePrice(100)
    expect(product.price).toEqual(100)
  })
})
