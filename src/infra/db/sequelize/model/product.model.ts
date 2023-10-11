import { PrimaryKey, Table, Column, Model } from 'sequelize-typescript'

@Table({ tableName: 'tb_products', timestamps: false })
export default class ProductModel extends Model {
  @PrimaryKey
  @Column
  declare id: string

  @Column({ allowNull: false })
  declare name: string

  @Column({ allowNull: false })
  declare price: number

  @Column({ allowNull: false })
  declare description: string
}
