import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import "./index.css"
import { store } from "./redux/store.ts"
import AppRouter from "./Router.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
)
