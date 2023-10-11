import Product from '../../domain/entities/product'
import ProductRepositoryInterface from '../../domain/repository/product-repository-interface'
import ProductModel from '../db/sequelize/model/product.model'

export default class ProductRepository implements ProductRepositoryInterface {
  async create (product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price
    })
  }

  async update (id: string, product: Product): Promise<void> {
    await ProductModel.update({
      name: product.name,
      description: product.description,
      price: product.price
    }, { where: { id } })
  }

  async delete (id: string): Promise<number> {
    return await ProductModel.destroy({ where: { id } })
  }

  async findById (id: string): Promise<Product> {
    const model = await ProductModel.findOne({ where: { id } })
    if (!model) throw new Error('Product not found')
    return new Product(model.id, model.name, model.description, model.price)
  }

  async findAll (): Promise<Product[]> {
    const models = await ProductModel.findAll()
    return models.map((model) => new Product(model.id, model.name, model.description, model.price))
  }
}
