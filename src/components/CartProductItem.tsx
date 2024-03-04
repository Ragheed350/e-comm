import { useEffect, useState } from "react"
import { MinusIcon } from "../assets/icons/minus"
import { PlusIcon } from "../assets/icons/plus"
import { CartItem } from "../types/Cart"
import { api } from "../utils/api/interceptors"
import { Product } from "../types/Product"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { UpdateCartItemsAsync } from "../redux/cart/cartSlice"
import { USER_ID } from "../utils/api/constants"

type Props = {
  item: CartItem
}

export default function CartProductItem({ item }: Props) {
  const { updateStatus, carts } = useAppSelector((state) => state.Cart)
  const dispatch = useAppDispatch()

  let cartItems = [...carts[0].products]

  const [cartProduct, setcartProduct] = useState<Product | null>()

  const handleUpdateItem = (newQuantity: number) => {
    const indexOfUpdatedItem = cartItems.findIndex((item) => item.productId === item.productId)
    cartItems[indexOfUpdatedItem] = { productId: item.productId, quantity: newQuantity }
    dispatch(
      UpdateCartItemsAsync({
        cartId: carts[0].id,
        cart: {
          userId: USER_ID,
          date: new Date().toISOString(),
          products: cartItems,
        },
      })
    )
  }

  const getCartProduct = async (productId: number) => {
    try {
      const res = await api.get<Product>(`/products/${productId}`)
      res.status === 200 && res.data && setcartProduct(res.data)
    } catch (error) {
      return null
    }
  }

  useEffect(() => {
    getCartProduct(item.productId)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-y mb-20 border-gray-200 py-6">
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="img-box">
          <img src={cartProduct?.image} alt="prod" className="xl:w-[140px]" />
        </div>
        <div className="pro-data w-full max-w-sm ">
          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{cartProduct?.title}</h5>
        </div>
      </div>
      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        {/* Quantity adjustment buttons */}
        <h6 className="text-xl leading-9 text-black w-full max-w-[176px] text-center">
          {((cartProduct?.price ?? 0) * item.quantity).toFixed(2)}
        </h6>
        {/* Quantity input field */}
        <div className="flex items-center w-full mx-auto justify-center rounded-md bg-gray-100 max-w-40">
          <button
            disabled={updateStatus === "loading" || item.quantity === 1}
            onClick={() => handleUpdateItem(item.quantity - 1)}
            className="group px-5 py-[18px] hover:bg-gray-50 active:bg-gray-200 disabled:bg-inherit"
          >
            <MinusIcon />
          </button>
          <input
            type="text"
            className="outline-none text-black font-semibold text-lg w-full  py-[15px] text-center bg-transparent"
            onChange={(e) => handleUpdateItem(Number(e.currentTarget.value))}
            disabled={updateStatus === "loading"}
            value={item.quantity}
          />
          <button
            disabled={updateStatus === "loading"}
            onClick={() => handleUpdateItem(item.quantity + 1)}
            className="group px-5 py-[18px] hover:bg-gray-50 active:bg-gray-200 disabled:bg-inherit"
          >
            <PlusIcon />
          </button>
        </div>
        {/* Total price for the product */}
        <h6 className="text-2xl leading-9 w-full max-w-[176px] text-center">{cartProduct?.price}</h6>
      </div>
    </div>
  )
}
