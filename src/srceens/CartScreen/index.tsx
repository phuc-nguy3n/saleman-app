import React from 'react';
import {CartScreenProps} from '../../types';
import CartComponent from './components/CartComponent';

const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  return <CartComponent navigation={navigation} />;
};

export default CartScreen;
