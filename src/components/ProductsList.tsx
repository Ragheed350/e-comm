import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { FetchProductsAsync } from "../redux/products/productSlice"
import ProductCard from "./ProductCard"
import TabPanel from "./TabPanel"
import Loader from "./Loader"

export default function ProductsList() {
  // Get all products
  const { status, products } = useAppSelector((state) => state.Products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(FetchProductsAsync())
  }, [dispatch])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-black uppercase text-center">Best sellers</h2>

        <TabPanel />
        <Loader isLoading={status === "loading"}>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Loader>
      </div>
    </div>
  )
}
