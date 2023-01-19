import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import Shop from './pages/shop/shop'
import Cart from './pages/cart/cart'
import ShopContextProvider from "./context/shop-context"

const App = () => {
  return (
    <div className='App'>
    <ShopContextProvider>
      <Router>
      <Navbar /> 
        <Routes>
          <Route path='/' element = {<Shop />} />
          <Route path='/cart' element = {<Cart />} />
        </Routes>
      </Router>

      </ShopContextProvider>
    </div>
  )
}

export default App