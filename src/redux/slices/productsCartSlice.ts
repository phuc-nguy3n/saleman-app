import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../types';

type ProductsCartState = {
  products: Product[];
};

const initialState: ProductsCartState = {
  products: [
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      name: "Jordan Why Not? Zer0.4 'Family' PF",
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f546c01fff774735848196225649f7b7_9366/Giay_Chay_Bo_Supernova_Comfortglide_mau_xanh_la_IH0897_01_00_standard.jpg',
      price: 1000000,
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
      name: "Jordan Why Not? Zer0.4 'Family' PF",
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f546c01fff774735848196225649f7b7_9366/Giay_Chay_Bo_Supernova_Comfortglide_mau_xanh_la_IH0897_01_00_standard.jpg',
      price: 1000000,
    },
  ],
};

const productsCartSlice = createSlice({
  name: 'productsCart',
  initialState,
  reducers: {
    setProductsCart: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProductCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProductCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        product => product.code !== action.payload,
      );
    },
    updateProductCart: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        p => p.code === action.payload.code,
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const {
  setProductsCart,
  addProductCart,
  removeProductCart,
  updateProductCart,
} = productsCartSlice.actions;
export default productsCartSlice.reducer;
