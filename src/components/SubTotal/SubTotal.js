import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider';
import { getCartTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';

const SubTotal = () => {
    const [{cart, user}, dispatch] = useStateValue();
    const history = useHistory();

    const handleProceedToCheckout = () => {
        if (!user) {
            history.push('/login');
            return;
        }
        else if (!cart.length) return;
        else history.push('/payment');
    }
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
