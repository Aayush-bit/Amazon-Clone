import { Button } from '@mui/material';
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./Product.css"
import { StarBorder } from '@mui/icons-material';

const Product = () => {
    const title = "VRINDAVANBAZAAR.COM Krishna-Balaram Soft Toy Dolls- 8 inches- Soft and Stuffed Washable Toys";
    const price = 20;
    const numericRating = 4;
    const productImage = "https://m.media-amazon.com/images/I/61sw43+4gRL._AC_UL480_FMwebp_QL65_.jpg";

    return (
        <div className="product">
            {/* product title */}
            <p className="product__title">{title}</p>
            
            {/* product price */}
            <p className="product__price">$ {price}</p>
            
            {/* product rating */}
            <p className="product__rating">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                {/* <StarBorder /> */}
            </p>
            
            {/* product image */}
            <img className="product__image" src={productImage} alt={title} />
            
            {/* CTA - add to cart */}
            <div className="product__addToCart">
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
