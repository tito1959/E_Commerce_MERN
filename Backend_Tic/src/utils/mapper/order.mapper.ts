import { Order, orderNoPassword } from '../../Types/order.type'

export const mapperOrderData = (data: Order): orderNoPassword => {
  const { password, ...other } = data.userId._doc
  const orderMapped: orderNoPassword = {
    _id: data._id,
    userId: {
      ...other
    },
    products: [
      ...data.products
    ],
    amount: 0,
    address: '',
    status: ''
  }
  return orderMapped
}
