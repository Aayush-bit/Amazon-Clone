import React from 'react'
import SubTotal from '../../components/SubTotal/SubTotal'
import './Checkout.css'
import { useStateValue } from '../../StateProvider';
import CheckOutProduct from '../../components/CheckOutProduct/CheckOutProduct';

const Checkout = () => {
    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout ad" />

                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>
                </div>
                
                {/* ---------Checkout Products-------- */}
                { cart.map((item, i) => <CheckOutProduct item={item}/>) }
                
            </div>
            <div className="checkout__right">
                <div className="checkout__right__subtotal">
                    <SubTotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
