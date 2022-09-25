import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([])
    const addtoCart = product => {
        console.log(product)
        setCart([...cart, product])
    }


    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="container">
            <div className='prd-con'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addtoCart={addtoCart}></Product>)
                }
            </div>
            <div className='cart-con'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;