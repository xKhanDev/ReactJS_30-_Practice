import React from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import store from "./store/store"

const ReduxApp = () => {
  return (
    <div>
        <Provider store={store}>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home />}></Route>
            <Route path="/cart" element={ <Cart />}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default ReduxApp