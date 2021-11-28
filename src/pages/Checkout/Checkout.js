import React from 'react'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className="checkout">
            {/* <h1>Checkout Page</h1> */}
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout ad" />

                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>
                </div>

                {/* ---------Products-------- */}
                {/* product */}
                {/* product */}
                {/* product */}
                {/* product */}
                
            </div>
            <div className="checkout__right">
                <div className="checkout__right__subtotal">
                    <h2>subtotal</h2>
                </div>
            </div>
        </div>
    )
}

export default Checkout
