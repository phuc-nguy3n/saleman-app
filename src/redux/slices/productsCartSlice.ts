import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsCart} from '../../types';

type ProductsCartState = {
  products: ProductsCart[];
};

const initialState: ProductsCartState = {
  products: [
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      name: "Jordan Why Not? Zer0.4 'Family' PF",
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f546c01fff774735848196225649f7b7_9366/Giay_Chay_Bo_Supernova_Comfortglide_mau_xanh_la_IH0897_01_00_standard.jpg',
      price: 1000000,
      quantity: 1,
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
      name: "Jordan Why Not? Zer0.4 'Family' PF",
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f546c01fff774735848196225649f7b7_9366/Giay_Chay_Bo_Supernova_Comfortglide_mau_xanh_la_IH0897_01_00_standard.jpg',
      price: 1000000,
      quantity: 2,
    },
  ],
};

const productsCartSlice = createSlice({
  name: 'productsCart',
  initialState,
  reducers: {
    setProductsCart: (state, action: PayloadAction<ProductsCart[]>) => {
      state.products = action.payload;
    },
    addProductCart: (state, action: PayloadAction<ProductsCart>) => {
      state.products.push(action.payload);
    },
    removeProductCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        product => product.code !== action.payload,
      );
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{code: string; quantity: number}>,
    ) => {
      const index = state.products.findIndex(
        p => p.code === action.payload.code,
      );
      if (index !== -1) {
        if (action.payload.quantity <= 0) {
          state.products.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng nếu số lượng là 0
        } else {
          state.products[index].quantity = action.payload.quantity;
        }
      }
    },
  },
});

export const {
  setProductsCart,
  addProductCart,
  removeProductCart,
  updateProductQuantity,
} = productsCartSlice.actions;
export default productsCartSlice.reducer;
