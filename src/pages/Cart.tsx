import { useEffect, useState } from "react"
import CartProductItem from "../components/CartProductItem"
import FormInput from "../components/FormInput"
import Loader from "../components/Loader"
import { useAppSelector } from "../redux/hooks"
import { Product } from "../types/Product"
import { api } from "../utils/api/interceptors"

// Assuming shipping fee is a constant
const shippingFee = 25

const CartPage = () => {
  const { status, updateStatus, carts } = useAppSelector((state) => state.Cart)
  const [subtotal, setSubtotal] = useState(0)
  const [canCheckOut, setCanCheckOut] = useState(true)

  useEffect(() => {
    const getSubTotal = async () => {
      setCanCheckOut(false)
      if (carts.length !== 0) {
        try {
          const prices = await Promise.all(
            carts[0].products.map(async (item) => {
              const res = await api.get<Product>(`/products/${item.productId}`)
              return res.data.price * item.quantity
            })
          )
          const calculatedSubtotal = prices.reduce((acc, curr) => acc + curr, 0)
          setSubtotal(calculatedSubtotal)
        } catch (error) {
          console.error("Error fetching product prices:", error)
        }
      }
      setCanCheckOut(true)
    }

    getSubTotal()
  }, [carts])

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div className="hidden lg:grid grid-cols-2 py-6 uppercase">
          <div className="font-semibold text-xl leading-8 text-black">Product</div>
          <p className="font-semibold text-xl leading-8 text-black flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">Price</span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Unit Price</span>
          </p>
        </div>

        <Loader isLoading={status === "loading"} type="cards-horizontal" numOfItems={2}>
          <>
            {carts.length !== 0 ? (
              carts[0].products?.map((cartItem) => <CartProductItem key={cartItem.productId} item={cartItem} />)
            ) : (
              <div>
                <h2>Your Cart is Empty</h2>
              </div>
            )}
          </>
        </Loader>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <FormInput buttonLabel="Redeem" placeHolder="Voucher code" />
          </div>
          <div className="p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-4">
              <p className="font-normal text-lg leading-8 text-black">Subtotal</p>
              <h6 className="font-semibold text-lg leading-8 text-black">${subtotal.toFixed(2)}</h6>
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <p className="font-normal text-lg leading-8 text-black">Shipping fee</p>
              <h6 className="font-semibold text-lg leading-8 text-black">${shippingFee}</h6>
            </div>
            <div className="flex items-center justify-between w-full mb-4 pb-4 border-b border-gray-200">
              <p className="font-manrope font-medium text-lg leading-9 text-black">Coupon</p>
              <h6 className="font-manrope font-medium text-lg leading-9">No</h6>
            </div>
            <div className="flex items-center justify-between w-full py-4">
              <p className="font-manrope font-medium text-2xl leading-9 text-black">Total</p>
              <h6 className="font-manrope font-medium text-2xl leading-9">${(subtotal + shippingFee).toFixed(2)}</h6>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col sm:flex-row justify-end gap-3 mt-8">
          <button
            disabled={!canCheckOut || updateStatus === "loading" || status === "loading"}
            className="rounded-md w-full max-w-[280px] py-4 text-center justify-center items-center bg-secondary disabled:bg-gray-300 font-semibold text-lg text-white flex"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  )
}

export default CartPage
