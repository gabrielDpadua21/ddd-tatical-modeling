import { PrimaryKey, Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript'
import CustomerModel from './customer.model'

@Table({ tableName: 'tb_order', timestamps: false })
export default class OrderModel extends Model {
  @PrimaryKey
  @Column
  declare id: string

  @ForeignKey(() => CustomerModel)
  @Column({ allowNull: false })
  declare customerId: string

  @BelongsTo(() => CustomerModel)
  declare customer: CustomerModel

  @Column({ allowNull: false })
  declare total: number
}
