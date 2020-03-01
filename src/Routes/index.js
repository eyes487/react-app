import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../page/Home/index'
import Cart from '../page/Cart'
import Order from '../page/Order'
import My from '../page/My'
import Login from '../page/Login'
import AuthorizedRoute from './AuthorizedRoute'

function Routes(){
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <PrivateRoute path="/cart" component={MyTaobaoPage} /> */}
                <AuthorizedRoute path="/cart" component={Cart}/>
                <AuthorizedRoute path="/order" component={Order}/>
                <AuthorizedRoute path="/my" component={My}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    )
}

export default Routes;