import { useEffect, useCallback } from "react"
import { FetchCategorysAsync, selectCategory } from "../redux/category/categorySlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { FetchProductsAsync, FetchProductsByCategoryAsync } from "../redux/products/productSlice"
import Loader from "./Loader"

interface Props {}

export default function TabPanel({}: Props) {
  const dispatch = useAppDispatch()
  const { status, categories, selectedCategory } = useAppSelector((state) => state.Category)

  const handleSelectCategory = useCallback(
    (category: string) => {
      if (category === "All") {
        dispatch(FetchProductsAsync())
      } else {
        dispatch(FetchProductsByCategoryAsync(category))
      }
      dispatch(selectCategory(category))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(FetchCategorysAsync())
  }, [dispatch])

  return (
    <div className="mt-10">
      <Loader isLoading={status === "loading"} numOfItems={5} type="text">
        <div className="flex justify-normal sm:justify-center overflow-auto text-nowrap w-auto">
          {categories.map((category) => (
            <div
              key={category}
              className={`mx-2 md:mx-4 cursor-pointer ${selectedCategory === category ? "text-secondary underline" : "text-black"}`}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </Loader>
    </div>
  )
}
