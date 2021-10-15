import React from 'react'
import { Route, Switch } from "react-router-dom";

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
        </Switch>
    )
}

export default Routes
