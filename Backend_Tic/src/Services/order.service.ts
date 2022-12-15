import { orderModel } from '../Model/order.model'
import { Order, orderNoId } from '../Types/order.type'
import { mapperOrderData } from '../utils/mapper/order.mapper'

export const orderIdService = async (id: string): Promise<Order | string> => {
  const dataRes = await orderModel.findById(id).populate('userId')
  if (dataRes === null) return 'order not founded'

  return mapperOrderData(dataRes._doc)
}

export const allOrderService = async (): Promise<Order[] | string> => {
  const dataRes = await orderModel.find({}).populate('userId products.productId')
  if (dataRes === null) return 'orders empty'
  const dataMapped = dataRes.map(el => mapperOrderData(el))
  return dataMapped
}

export const createOrderService = async (data: orderNoId): Promise<Order> => {
  const datRes = await orderModel.create(data)
  return datRes
}

export const updateOrderService = async (id: string, data: orderNoId): Promise<Order | string> => {
  const dataRes = await orderModel.findByIdAndUpdate(id, data, { new: true })
  if (dataRes === null) return 'order to update no exist'
  return dataRes
}

export const deleteOrderService = async (id: string): Promise<Order | string> => {
  const dataRes = await orderModel.findByIdAndRemove(id)
  if (dataRes === null) return 'id order not founded'
  return dataRes
}
