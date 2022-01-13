import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import CheckOutProduct from '../../components/CheckOutProduct/CheckOutProduct';
import { getCartTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import "./Payment.css"
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
    const [{cart, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    
    const [isDisabled, setIsDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    // const getClientSecret = async () => {
    //     console.log("hello")

    //     const response = await axios({
    //         method: "post",
    //         url: `/payments/create?total=${ getCartTotal(cart) * 100 }`
    //     })
    //     setClientSecret(response.data.clientSecret);
    // }
    
    useEffect(() => {
        const getClientSecret = async () => {
            // ! some issue happening here - not getting the expected result
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${ getCartTotal(cart) * 100 }`
            })
            
            console.log(response) // ! nothing is logging onto the console
            setClientSecret(response.data.clientSecret); // ! neither the value of clientSecret is changing

            // todo - the following is the tester code in order to fix the above bug
            // axios.post(`http://localhost:5001/clone-b1d57/us-central1/api/payments/create?total=${ getCartTotal(cart) * 100 }`)
            // .then(response => {
            //     console.log(response)
            //     // setClientSecret(response.data.clientSecret);
            // })
        }

        getClientSecret();
        console.log('THE SECRET IS >>>', clientSecret)
    }, [cart]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        .then(({paymentIntent}) => {
            setSucceeded(true);
            setError(false);
            setProcessing(false);
            history.replace('/returns-and-orders')
        })
    }
    
    const handleChange = e => {
        setIsDisabled(e.empty);
        setError(e.error ? e.error.message : null);
    }
    
    return (
        <div className='payment'>
            <h1 className='payment__page-title'>Checkout</h1>
            <div className="payment-container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>delivery address</h3>
                    </div>
                    <div className="payment__address payment__section__value">
                        <p>{user?.email}</p>
                        <p>CB-1, White Lane</p>
                        <p>Chicago, United States</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>items in cart</h3>
                    </div>
                    <div className="payment__items payment__section__value">
                        {/* ---------Checkout Products-------- */}
                        { cart.map((item, i) => <CheckOutProduct item={item}/>) }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment processing</h3>
                    </div>
                    <div className="payment__processing payment__section__value">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <CurrencyFormat
                                renderText={(value) => (
                                <>
                                    <p>
                                    Your Order Total ({cart.length} items): <strong>{value}</strong>
                                    </p>
                                </>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />

                            <button disabled={processing || isDisabled || succeeded}>
                                <span>{processing ? "Processing" : "Pay Now" }</span>
                            </button>

                            {
                                error && <div>{error}</div> 
                            }
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
