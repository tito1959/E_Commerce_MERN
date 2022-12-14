import { cartModel } from '../Model/cart.model'
import { Cart, cartNotId } from '../Types/cart.type'

/* TODO: important the request only can acces the owner id and Admin */
export const getCartService = async (id: string): Promise<Cart[] | string[] | string> => {
  const dataRequest = await cartModel.find({ userId: id }).populate('products.productId')
  if (dataRequest === null) return ('user not have order')

  return dataRequest
}

export const createCartService = async (data: cartNotId): Promise<Cart> => {
  const dataRes = await cartModel.create(data)
  return dataRes
}

/* the updated cant change the owner of product */
export const updateCartService = async (id: string, data: cartNotId): Promise<Cart | string> => {
  const dataRes = await cartModel.findByIdAndUpdate(id, data, { new: true })
  if (dataRes === null) return 'update cart not founded'

  return dataRes
}

export const deleteCartService = async (id: string): Promise<Cart | string> => {
  const dataRes = await cartModel.findByIdAndDelete(id)
  if (dataRes === null) return 'delete failed user not founded'

  return dataRes
}
