import React from 'react'
import './CheckOutProduct.css'
import StarIcon from '@mui/icons-material/Star';
import { StarBorder } from '@mui/icons-material';
import { useStateValue } from '../../StateProvider';

const CheckOutProduct = ({item}) => {
    const {id, title, image, price, rating} = item;
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({ type: "REMOVE_FROM_CART",id });
    }
    
    return (
        <div className="checkOutProduct">
            {/* image */}
            <img className="checkOutProduct__image" src={image} alt="" />

            <div className="checkOutProduct__info">
                {/* title */}
                <h3 className="checkOutProduct__title">{title}</h3>

                {/* price */}
                <p className="checkOutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                {/* rating */}
                <p className="product__rating">
                    {Array(rating).fill().map((_, i) => <StarIcon />)}
                    {
                        (5 - rating) > 0 ?
                        Array(5 - rating).fill().map((_, i) => <StarBorder />) :
                        <></>
                    }
                </p>

                {/* remove from cart */}
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>

        </div>
    )
}

export default CheckOutProduct
