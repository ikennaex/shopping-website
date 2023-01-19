import React from 'react'
import {PRODUCTS} from "../../products"
import Product from  "./product"
import "./shop.css"

const Shop = () => {
  return (
    <div className='shop'>
        <div className='header-text'>
            <h1>Carolex Stores</h1>
        </div>

        <div className='products'>{PRODUCTS.map((product) => (
            <Product data ={product}/>
        ))}</div>
    </div>
  )
}

export default Shop