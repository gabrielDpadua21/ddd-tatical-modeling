import Product from '../entities/product'
import ProduceService from './product.service'

describe('Product service unit tests', () => {
  it('should change the price of all products', async () => {
    const product01 = new Product('1', 'name', 'description', 10)
    const product02 = new Product('2', 'name', 'description', 20)
    const product03 = new Product('3', 'name', 'description', 30)
    const products = [product01, product02, product03]

    ProduceService.increasePrice(products, 50)

    expect(product01.price).toBe(15)
    expect(product02.price).toBe(30)
    expect(product03.price).toBe(45)
  })
})
