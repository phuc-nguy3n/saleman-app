import React from 'react';

import ProductsComponents from './components/ProductsComponents';
import {ProductsScreenProps} from '../../types';

const ProductScreen: React.FC<ProductsScreenProps> = ({navigation}) => {
  return <ProductsComponents navigation={navigation} />;
};

export default ProductScreen;
