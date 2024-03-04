import { useMemo } from "react"
import { Product } from "../types/Product"
import { LoveIcon } from "../assets/icons/love"
import { CartIcon } from "../assets/icons/cart"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { UpdateCartItemsAsync } from "../redux/cart/cartSlice"
import { USER_ID } from "../utils/api/constants"

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
  const dispatch = useAppDispatch()
  const { carts } = useAppSelector((state) => state.Cart)
  const randomDiscount = useMemo(() => Math.floor(Math.random() * 100), [])

  const discountedPrice = useMemo(() => {
    const discountedPrice = product.price - (product.price * randomDiscount) / 100
    return discountedPrice.toFixed(2)
  }, [product.price, randomDiscount])

  const handleAddToCart = () => {
    const itemIndex = carts[0].products.findIndex((item) => item.productId === product.id)

    if (itemIndex !== -1) {
      let newItems = [...carts[0].products]
      newItems[itemIndex] = { productId: product.id, quantity: newItems[itemIndex].quantity + 1 }
      dispatch(
        UpdateCartItemsAsync({ cartId: carts[0].id, cart: { userId: USER_ID, date: new Date().toDateString(), products: newItems } })
      )
    } else {
      dispatch(
        UpdateCartItemsAsync({
          cartId: carts[0].id,
          cart: {
            userId: USER_ID,
            date: new Date().toDateString(),
            products: [...carts[0].products, { productId: product.id, quantity: 1 }],
          },
        })
      )
    }
  }

  return (
    <div key={product.id} className="group relative border-2 rounded-md">
      <div className="w-full h-full absolute bg-transparent justify-center hidden group-hover:flex">
        <div className="w-[85%] h-[45%] bg-white mt-8 opacity-95 flex justify-center items-center gap-2">
          <ButtonIcon>
            <LoveIcon />
          </ButtonIcon>
          <ButtonIcon onClick={handleAddToCart}>
            <CartIcon />
          </ButtonIcon>
        </div>
      </div>
      <div className="aspect-square w-full overflow-hidden rounded-md bg-white lg:aspect-none lg:h-52">
        <img src={product.image} alt={product.image} className="h-full w-full object-contain object-center lg:h-full lg:w-full" />
      </div>
      <div className="mt-4 flex justify-center">
        <div>
          <h3 className="text-sm font-bold text-primary text-center">
            <a href={`/${product.id}`}>
              <span aria-hidden="true" className="inset-0" />
              {product.title}
            </a>
          </h3>
          <div className="mt-4 flex justify-evenly items-end">
            <p className="text-sm text-secondary font-bold">${discountedPrice}</p>
            <p className="text-sm text-gray-400 line-through">${product.price}</p>
            <p className="text-sm font-bold text-red">{randomDiscount}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ButtonIcon = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className="text-blue-700 border border-blue-300 hover:bg-blue-100 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
      {...props}
    />
  )
}
