export interface Cart {
  id: number
  userId: number
  date: string
  products: CartItem[]
  __v: number
}

export interface CartItem {
  productId: number
  quantity: number
}

export interface UpdateCartItemReq {
  userId: number
  date: string
  products: CartItem[]
}
