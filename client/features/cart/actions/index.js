// @flow
import { createAction } from 'redux-actions';

export const ADD_TO_CART: string = 'ADD_TO_CART';
export const addToCart = createAction(ADD_TO_CART);
