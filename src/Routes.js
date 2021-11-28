import React from 'react'
import { Route, Switch } from "react-router-dom";
import Checkout from './pages/Checkout/Checkout';

// common routes
import Home from "./pages/Home/Home"


// auth routes
// ??


// unauth routes
import Login from "./pages/Login/Login"

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
        </Switch>
    )
}

export default Routes
