import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RequestStatus } from "../../types/App"
import { api } from "../../utils/api/interceptors"

interface CategoryState {
  status: RequestStatus
  categories: string[]
  selectedCategory: string
}

const initialState: CategoryState = {
  status: "nothing",
  categories: ["All"],
  selectedCategory: "All",
}

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload
    },
    fetchCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = ["All", ...action.payload]
    },
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
    },
  },
})

export const { selectCategory } = categorySlice.actions
const { setStatus, fetchCategories } = categorySlice.actions

export const FetchCategorysAsync = createAsyncThunk("category/fetch", async (_, { dispatch }) => {
  try {
    dispatch(setStatus("loading"))
    const res = await api.get("/products/categories")
    dispatch(fetchCategories(res.data))
    dispatch(setStatus("data"))
  } catch (error) {
    dispatch(setStatus("error"))
  }
})

export default categorySlice.reducer
