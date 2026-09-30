import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import profitReducer from './profitSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    profit: profitReducer
  }
});

export default store;
