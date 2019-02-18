// @flow
import { createAction } from 'redux-actions';

export const ADD_TO_CART: string = 'ADD_TO_CART';
export const addToCart = createAction(ADD_TO_CART);

export const REMOVE_FROM_CART: string = 'REMOVE_FROM_CART';
export const removeFromCart = createAction(REMOVE_FROM_CART);

export const UPDATE_QUANTITY: string = 'UPDATE_QUANTITY';
export const updateQuantity = createAction(UPDATE_QUANTITY);
