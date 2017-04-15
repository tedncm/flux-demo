import React from 'react';
import AppActions from '../actions/app-actions';

export default class App extends React.Component {
    render() {
        return <h1 onClick={ AppActions.addItem.bind(null, 'This is an item')} >Hello FLUXY</h1>
    } 
}