import OrderItem from './orderItem'

export default class Order {
  private readonly _id: string
  private readonly _customerId: string
  private readonly _items: OrderItem[] = []

  constructor (id: string, customerId: string, items: OrderItem[]) {
    this._id = id
    this._customerId = customerId
    this._items = items
    this.validate()
  }

  private validate (): void {
    if (this._id.length <= 0) throw new Error('Id is required')
    if (this._customerId.length <= 0) throw new Error('CustomerId is required')
    if (this._items.length <= 0) throw new Error('Does not have items')
  }

  public get id (): string {
    return this._id
  }

  public get customerId (): string {
    return this._customerId
  }

  public get items (): OrderItem[] {
    return this._items
  }

  public addItem (item: OrderItem): void {
    this._items.push(item)
  }

  public total (): number {
    return this._items.reduce((acc, item) => acc + item.getTotalPrice(), 0)
  }

  public totalItems (): number {
    return this._items.reduce((acc, item) => acc + item.quantity, 0)
  }
}
