import { Button } from '@mui/material';
import React from 'react'
import "./Product.css"

const Product = () => {
    const title = "Lorem ipsum dolor sit amet, consectetur adipisicing";
    const price = 20;
    const rating = 5
    const productImage = "image";
    
    return (
        <div className="product">
            {/* product title */}
            <p className="product__title">{title}</p>
            
            {/* product price */}
            <p className="product__price">{price}</p>
            
            {/* product rating */}
            <p className="product__rating">{rating}</p>
            
            {/* product image */}
            <p className="product__image">{productImage}</p>
            
            {/* CTA - add to cart */}
            <Button className="product__addToCart">Add to Cart</Button>
        </div>
    )
}

export default Product
