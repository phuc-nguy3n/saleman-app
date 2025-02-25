import React from 'react';
import ProductDetailsComponents from './components/ProductDetailsComponents';
import {ProductDetailsScreenProps} from '../../types';

const ProducDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  navigation,
}) => {
  return <ProductDetailsComponents navigation={navigation} />;
};

export default ProducDetailsScreen;
