import { useEffect, useLayoutEffect, useState } from "react"
import { FetchCartItemsAsync } from "../../redux/cart/cartSlice"
import { useAppDispatch } from "../../redux/hooks"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

type Props = {}

export default function Layout({}: Props) {
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const dispatch = useAppDispatch()

  // Fetch cart items when the component mounts
  useEffect(() => {
    dispatch(FetchCartItemsAsync())
  }, [dispatch]) // Include dispatch in the dependency array

  // Calculate header height using useLayoutEffect
  useLayoutEffect(() => {
    if (window && window.document) {
      const height = document.getElementById("header")?.scrollHeight ?? 0 // Handle potential error
      setHeaderHeight(height)
    }
  }, [])

  return (
    <>
      <Header />
      {/* Set padding top of main content to accommodate the header */}
      <main className={`bg-white min-h-[100vh] pt-[${headerHeight}px]`}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
