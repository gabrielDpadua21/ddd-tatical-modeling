export default class OrderItem {
  private readonly _id: string
  private readonly _productId: string
  private readonly _name: string
  private readonly _price: number
  private readonly _quantity: number

  constructor (id: string, name: string, productId: string, price: number, quantity: number) {
    this._id = id
    this._name = name
    this._productId = productId
    this._price = price
    this._quantity = quantity > 0 ? quantity : 1
  }

  public get price (): number {
    return this._price
  }

  public get quantity (): number {
    return this._quantity
  }

  public getTotalPrice (): number {
    return this.price * this.quantity
  }
}
