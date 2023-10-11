import Customer from './domain/entities/customer'
import Order from './domain/entities/order'
import OrderItem from './domain/entities/orderItem'

// AGGRETATES CUSTOMER
const customer = new Customer('1', 'name', 'email')
customer.changeAddress('street', 1, 'complement', 'city', 'state')
customer.toggleActive()

// AGGRETATES ORDER
const item01 = new OrderItem('1', 'name', 'p1', 1, 1)
const item02 = new OrderItem('2', 'name', 'p2', 2, 1)
const order = new Order('1', '1', [item01, item02], 1)

console.log(order)
