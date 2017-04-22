import React from 'react';
import Header from './header/app-header';
import Catalog from './catalog/app-catalog';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default ( props ) => {
    return (
        <div className="container">
            <Header></Header>
            <Route component={ Catalog } /> 
        </div>
    );
}