import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../types/Product"
import { RequestStatus } from "../../types/App"
import { api } from "../../utils/api/interceptors"

// Define a type for the slice state
interface ProductState {
  status: RequestStatus
  products: Product[]
  product?: Product
}

// Define the initial state using that type
const initialState: ProductState = {
  status: "nothing",
  products: [],
}

export const productSlice = createSlice({
  name: "productSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStatus: (state, { payload }: PayloadAction<RequestStatus>) => {
      state.status = payload
    },
    fetch: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload
    },
  },
})

const { setStatus, fetch } = productSlice.actions

export const FetchProductsAsync = createAsyncThunk("product/fetch", async (_, { dispatch }) => {
  try {
    dispatch(setStatus("loading"))
    const res = await api.get("/products")
    dispatch(fetch(res.data))
    dispatch(setStatus("data"))
  } catch (error) {
    dispatch(setStatus("error"))
  }
})

export const FetchProductsByCategoryAsync = createAsyncThunk("product/fetchByCategory", async (category: string, { dispatch }) => {
  try {
    dispatch(setStatus("loading"))
    const res = await api.get(`/products/category/${category}`)
    dispatch(fetch(res.data))
    dispatch(setStatus("data"))
  } catch (error) {
    dispatch(setStatus("error"))
  }
})

export default productSlice.reducer
