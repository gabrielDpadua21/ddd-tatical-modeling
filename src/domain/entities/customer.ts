import Address from './address'

export default class Customer {
  private readonly _id: string
  private _name: string
  private readonly _email: string
  private _address: Address
  private _active: boolean
  private _rewardPoints: number = 0

  constructor (id: string, name: string, email: string) {
    this._id = id
    this._name = name
    this._email = email
    this._active = false
    this.validate()
  }

  private validate (): void {
    if (this._id.length === 0) throw new Error('Id is required')
    if (this._email.length === 0) throw new Error('Email is required')
    if (this._name.length === 0) throw new Error('Name is required')
  }

  public get id (): string {
    return this._id
  }

  public get rewardPoints (): number {
    return this._rewardPoints
  }

  public get name (): string {
    return this._name
  }

  public get email (): string {
    return this._email
  }

  public get active (): boolean {
    return this._active
  }

  public get address (): Address {
    return this._address
  }

  public changeName (name: string): void {
    this._name = name
  }

  public toggleActive (): void {
    this._active = !this._active
  }

  public changeAddress (street: string, number: number, complement: string, city: string, state: string): void {
    this._address = new Address(street, number, complement, city, state)
  }

  public addRewardPoints (points: number): void {
    this._rewardPoints += points
  }
}
