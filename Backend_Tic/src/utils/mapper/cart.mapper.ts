import { cartNotId } from '../../Types/cart.type'

export const mappedCart = (data: any): cartNotId => {
  const dataMapped: cartNotId = {
    userId: '',
    products: [
      {
        productId: ''
      },
      {
        quantity: 0
      }
    ]
  }
  return dataMapped
}
