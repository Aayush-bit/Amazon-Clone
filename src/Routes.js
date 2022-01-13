import Payment from './pages/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Checkout from './pages/Checkout/Checkout';
import { Elements } from '@stripe/react-stripe-js';

// common routes
import Home from "./pages/Home/Home"


// auth routes
// ??


// unauth routes
import Login from "./pages/Login/Login"
import ReturnsAndOrders from './pages/ReturnsAndOrders/ReturnsAndOrders';


const promise = loadStripe(
    "pk_test_51KCHvoSBNHWR8C3pNpRlystDbQdmGN1UPRZ3ATXT79p9CQXoKsfQukWVWwLtadDvSpLemayXfOWJ1uo3bg153zsy00V7E0ImSN"
);

const Routes = () => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/checkout">
                <Checkout/>
            </Route>
            <Route exact path="/returns-and-orders">
                <ReturnsAndOrders/>
            </Route>
            <Route exact path="/payment">
                <Elements stripe={promise}>
                    <Payment/>
                </Elements>
            </Route>
        </Switch>
    )
}

export default Routes
