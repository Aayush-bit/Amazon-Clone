// import { Button } from '@mui/material';
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./Product.css"
import { StarBorder } from '@mui/icons-material';
import { useStateValue } from '../../StateProvider';

const Product = ({ id, title, price, rating, image }) => {
    const [{cart}, dispatch] = useStateValue();
    
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {id, title, price, rating, image}
        });
    }
    
    return (
        <div className="product">
            {/* product title */}
            <p className="product__title">{title}</p>
            
            {/* product price */}
            <p className="product__price">$ {price}</p>
            
            {/* product rating */}
            <p className="product__rating">
                {Array(rating).fill().map((_, i) => <StarIcon />)}
                {
                    (5 - rating) > 0 ?
                    Array(5 - rating).fill().map((_, i) => <StarBorder />) :
                    <></>
                }
            </p>
            
            {/* product image */}
            <img className="product__image" src={image} alt={title} />
            
            {/* CTA - add to cart */}
            <div className="product__addToCart">
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
