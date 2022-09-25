import React from 'react';
import './Product.css'
const Product = (props) => {
    const {addtoCart} = props
    // console.log(props)
    const {img, name , price,ratings} = props.product
    return (
        <div className='product-con'>
            <div className='image'>
            <img src={img} alt="" />
            </div>
            <div className='product-info'>
               <div>
               <h3>Name {name}</h3>
                <h5>Price ${price}</h5>
               </div>
                <div>
                <h5>Seller : {name}</h5>
                </div>
            </div>
                <button onClick={()=>addtoCart(props.product)} className='btn'>Add to cart</button>
        
        </div>
        
    );
};

export default Product;