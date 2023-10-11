export default class Product {
  private readonly _id: string
  private _name: string
  private _description: string
  private _price: number

  constructor (id: string, name: string, description: string, price: number) {
    this._id = id
    this._name = name
    this._description = description
    this._price = price
    this.validate()
  }

  private validate (): void {
    if (this._id.length <= 0) throw new Error('Id is required')
    if (this._name.length <= 0) throw new Error('Name is required')
    if (this._description.length <= 0) throw new Error('Description is required')
    if (this._price <= 0) throw new Error('Price is required')
  }

  public get id (): string {
    return this._id
  }

  public get name (): string {
    return this._name
  }

  public get description (): string {
    return this._description
  }

  public get price (): number {
    return this._price
  }

  public changeName (name: string): void {
    this._name = name
  }

  public changeDescription (description: string): void {
    this._description = description
  }

  public changePrice (price: number): void {
    this._price = price
  }
}
