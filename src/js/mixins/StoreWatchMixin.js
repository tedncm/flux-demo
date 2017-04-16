import React from 'react';
import AppStore from '../stores/app-store';

export default ( InnerComponent, stateCallback) => class extends React.Component {
    // constructor(props) {
    //     super();
    //     this.state = cartItems();
    //     this._onChange = this._onChange.bind(this);
    // }

    // componentWillMount() {
    //     AppStore.addChangeListener( this._onChange );
    // }

    // componentWillUnmount() {
    //     AppStore.removeChangeListener( this._onChange );
    // }

    // _onChange() {
    //     this.setState( cartItems() )
    // }
} 