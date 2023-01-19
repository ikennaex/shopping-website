import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../context/shop-context"
import CartItem from './cart-item'
import "./cart.css"
import { useNavigate } from "react-router-dom";




const Cart = () => {

const { cartItems, getTotalCartAmount} = useContext(ShopContext)
const totalAmount = getTotalCartAmount()

const Navigate = useNavigate()


  return (
    <div className='cart'>
    <div><h1>Cart Items</h1></div>

    <div className='cartItems'>
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem data = {product} />
        }
      })}
    </div>

    {totalAmount > 0 ?     

    <div className='checkout'>
      <p>Subtotal: ${totalAmount}</p>
      <button onClick={() => Navigate("/")}> Continue Shopping</button>
      <button> Checkout</button> 
    </div>
    : <h1>Cart is empty</h1>}
    
  </div>
  )
}

export default Cart