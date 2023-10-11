import { PrimaryKey, Table, Column, Model } from 'sequelize-typescript'

@Table({ tableName: 'tb_customer', timestamps: false })
export default class CustomerModel extends Model {
  @PrimaryKey
  @Column
  declare id: string

  @Column({ allowNull: false })
  declare name: string

  @Column({ allowNull: false })
  declare street: string

  @Column({ allowNull: false })
  declare number: number

  @Column({ allowNull: false })
  declare complement: string

  @Column({ allowNull: false })
  declare city: string

  @Column({ allowNull: false })
  declare state: string

  @Column({ allowNull: false })
  declare email: string

  @Column({ allowNull: false })
  declare active: boolean

  @Column({ allowNull: false })
  declare rewardPoints: number
}
