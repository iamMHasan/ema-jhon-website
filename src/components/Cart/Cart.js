import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2>Order Summury</h2>
            <h4>Prodcut added {cart.length} </h4>
        </div>
    );
};

export default Cart;