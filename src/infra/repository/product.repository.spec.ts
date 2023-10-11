import { Sequelize } from 'sequelize-typescript'
import ProductModel from '../db/sequelize/model/product.model'
import ProductRepository from './product.repository'
import Product from '../../domain/entities/product'

describe('Product repository unit tests', () => {
  let sequelize: Sequelize
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })

    sequelize.addModels([ProductModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a product', async () => {
    const productRepository = new ProductRepository()
    const product = new Product('1', 'name', 'description', 10)
    await productRepository.create(product)
    const newProduct = await productRepository.findById(product.id)
    expect(JSON.stringify(product)).toStrictEqual(JSON.stringify(newProduct))
  })

  it('should update a product', async () => {
    const productRepository = new ProductRepository()
    const product = new Product('1', 'name', 'description', 10)
    await productRepository.create(product)
    product.changeName('new name')
    await productRepository.update(product.id, product)
    const newProduct = await productRepository.findById(product.id)
    expect(JSON.stringify(product)).toStrictEqual(JSON.stringify(newProduct))
  })

  it('should delete a product', async () => {
    const productRepository = new ProductRepository()
    const product = new Product('1', 'name', 'description', 10)
    await productRepository.create(product)
    const response = await productRepository.delete(product.id)
    expect(response).toBe(1)
  })

  it('Should find one product', async () => {
    const productRepository = new ProductRepository()
    const newProduct = new Product('1', 'name', 'description', 10)
    await productRepository.create(newProduct)
    const product = await productRepository.findById('1')
    expect(product.name).toBe('name')
  })

  it('Should find all products', async () => {
    const productRepository = new ProductRepository()
    const newProduct = new Product('1', 'name', 'description', 10)
    await productRepository.create(newProduct)
    const newProduct2 = new Product('2', 'name', 'description', 10)
    await productRepository.create(newProduct2)
    const products = await productRepository.findAll()
    expect(products.length).toBe(2)
  })
})
