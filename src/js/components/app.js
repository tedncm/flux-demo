import React from 'react';
import Cart from './cart/app-cart';
import Template from './app-template';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

export default () => {
    return (
        
        <Router>
            <div>
                <Route exact={true} path="/" component={ Template } />
                <Route path="/cart" component={ Cart } />
            </div>
        </Router>
        
    );
}

