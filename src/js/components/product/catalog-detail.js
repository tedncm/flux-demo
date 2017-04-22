import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import { Link } from 'react-router-dom';
import Header from '../header/app-header';

function getCatalogItem( props ) {
    // let item = AppStore.getCatalogItems().find( ( item ) => { 
    //     if(item.id === parseInt(props.match.params.item)) {
    //         return item;
    //     }
    // })
    let item = AppStore.getCatalog().find( (item) => {
        if(item.id === parseInt(props.match.params.item)) {
            return item;
        }
    })
    return { item };
}

const CatalogDetail = ( props ) => {
    return (
        <div className="container">
            <Header></Header>
            <h4>{ props.item.title }</h4>    
            <img src="http://placehold.it/250x250" />
            <p>{ props.item.description }</p>
            <p>${ props.item.cost } 
                <span className="text-success">
                    { props.item.qty && `(${props.item.qty} in cart)`}
                </span>    
            </p> 
            <div className="btn-group">   
            <Link to="/" className="btn btn-default btn-sm">Continue Shopping</Link>
            <CartButton 
                handler={
                    AppActions.addItem.bind(null, props.item)
                }
                txt="Add to cart"
            />
            </div>
        </div>
    )
}

export default StoreWatchMixin (CatalogDetail , getCatalogItem );