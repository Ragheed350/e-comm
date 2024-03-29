import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./products/productSlice"
import categorySlice from "./category/categorySlice"
import cartSlice from "./cart/cartSlice"

export const store = configureStore({
  reducer: {
    Products: productSlice,
    Category: categorySlice,
    Cart: cartSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
