import { combineReducers } from 'redux';

import cart from './cart/Reduces';
import productList from './productList/Reduces';
import theme from './theme/Reduces';

const initialState = {
  cart: JSON.parse(sessionStorage.getItem('cart')) || [],
  productList: '',
  theme: {
    theme: 'grass',
    color: 'green',
  },
};

export default combineReducers(
  {
    cart,
    productList,
    theme,
  },
  initialState
);