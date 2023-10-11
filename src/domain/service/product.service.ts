import Product from '../entities/product'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class ProduceService {
  public static increasePrice (products: Product[], price: number): void {
    for (const product of products) {
      product.changePrice(product.price * ((100 + price) / 100))
    }
  }
}
