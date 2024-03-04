import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RequestStatus } from "../../types/App"
import { api } from "../../utils/api/interceptors"
import { USER_ID } from "../../utils/api/constants"
import { Cart, UpdateCartItemReq } from "../../types/Cart"

interface CartState {
  status: RequestStatus
  updateStatus: RequestStatus
  carts: Cart[]
}

const initialState: CartState = {
  status: "nothing",
  updateStatus: "nothing",
  carts: [],
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload
    },
    setUpdateStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.updateStatus = action.payload
    },
    fetchCarts: (state, action: PayloadAction<Cart[]>) => {
      state.carts = action.payload
    },
    updateCart: (state, action: PayloadAction<Cart>) => {
      const updatedCart = action.payload
      const index = state.carts.findIndex((cart) => cart.id === updatedCart.id)
      if (index !== -1) state.carts[index] = updatedCart
    },
  },
})

const { setStatus, setUpdateStatus, fetchCarts, updateCart } = cartSlice.actions

export const FetchCartItemsAsync = createAsyncThunk("cart/fetch", async (_, { dispatch }) => {
  try {
    dispatch(setStatus("loading"))
    const res = await api.get(`/carts/user/${USER_ID}`)
    dispatch(fetchCarts(res.data))
    dispatch(setStatus("data"))
  } catch (error) {
    dispatch(setStatus("error"))
  }
})

export const UpdateCartItemsAsync = createAsyncThunk(
  "cart/update",
  async ({ cartId, cart }: { cartId: number; cart: UpdateCartItemReq }, { dispatch }) => {
    try {
      dispatch(setUpdateStatus("loading"))
      const res = await api.put<Cart>(`/carts/${cartId}`, cart)
      dispatch(updateCart(res.data))
      dispatch(setUpdateStatus("data"))
    } catch (error) {
      dispatch(setUpdateStatus("error"))
    }
  }
)

export default cartSlice.reducer
