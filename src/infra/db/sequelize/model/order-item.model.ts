import { PrimaryKey, Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript'
import ProductModel from './product.model'

@Table({ tableName: 'tb_order-items', timestamps: false })
export default class OrderItemModel extends Model {
  @PrimaryKey
  @Column
  declare id: string

  @ForeignKey(() => ProductModel)
  @Column({ allowNull: false })
  declare productId: string

  @BelongsTo(() => ProductModel)
  declare product: ProductModel

  @Column({ allowNull: false })
  declare quantity: number

  @Column({ allowNull: false })
  declare price: number

  @Column({ allowNull: false })
  declare name: string
}
