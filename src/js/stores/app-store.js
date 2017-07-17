import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events'; // From Node
import CartAPI from '../api/CartAPI'; 

const CHANGE_EVENT = 'change'

// For IE11
if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
    'use strict';
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) { throw new TypeError('"this" is null or not defined'); }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') { throw new TypeError('predicate must be a function'); }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return kValue.
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
            }
            // e. Increase k by 1.
            k++;
        }

            // 7. Return undefined.
            return undefined;
        }
    });
}

const AppStore = Object.assign(EventEmitter.prototype, {
    emitChange() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT , callback );
    },

    removeChangeListener( callback ) {
        this.removeListener( CHANGE_EVENT , callback );
    },

    getCart() {
        return CartAPI.cartItems;
    },

    getCatalog() { 
        return CartAPI.getCatalog();
    },

    getCartTotals() {
        return CartAPI.cartTotals();
    },  

    dispatcherIndex: register( function( action ){

        switch(action.actionType) {

            case AppConstants.ADD_ITEM:
                CartAPI.addItem( action.item );
                break;

            case AppConstants.REMOVE_ITEM:
                CartAPI.removeItem( action.item );
                break;

            case AppConstants.INCREASE_ITEM:
                CartAPI.increaseItem( action.item );
                break;

            case AppConstants.DECREASE_ITEM:
                CartAPI.decreaseItem( action.item );
                break;
        }

        AppStore.emitChange();
    })
});

export default AppStore;

