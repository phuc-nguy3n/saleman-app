import React from 'react';
import ShoppingComponent from './components/ShoppingComponent';
import {ShoppingScreenProps} from '../../types';

const ShoppingScreen: React.FC<ShoppingScreenProps> = ({navigation}) => {
  return <ShoppingComponent navigation={navigation} />;
};

export default ShoppingScreen;
