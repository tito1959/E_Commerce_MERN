import { orderModel } from '../Model/order.model'
import { Order } from '../Types/order.type'

export const getOrderService = async (id: string): Promise<Order | string> => {
  const dataRes = await orderModel.findById(id)
  if (dataRes === null) return 'order not founded'

  return dataRes
}
