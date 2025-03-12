import {useDispatch} from 'react-redux';
import {addProductCart} from '../redux/slices/productsCartSlice';

import {Product} from '../types';

const useCart = () => {
  const dispatch = useDispatch();

  const handleAddProductToCart = (product: Product) => {
    if (product) {
      dispatch(addProductCart({...product, quantity: 1}));
    }
  };

  return {handleAddProductToCart};
};

export default useCart;
