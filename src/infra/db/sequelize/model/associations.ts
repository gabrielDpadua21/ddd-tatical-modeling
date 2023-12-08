// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HasMany, BelongsTo } from 'sequelize-typescript'
import OrderModel from './order.model'
import OrderItemModel from './order-item.model'

OrderModel.hasMany(OrderItemModel, {
  sourceKey: 'id',
  foreignKey: 'orderId',
  as: 'items' // this is the alias
})

OrderItemModel.belongsTo(OrderModel, {
  targetKey: 'id',
  foreignKey: 'orderId',
  as: 'order' // this is the alias
})
