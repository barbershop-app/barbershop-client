import {configureStore} from '@reduxjs/toolkit';
import appSlice from './Slices/appSlice';
import cartSlice from './Slices/cartSlice';
import dialSlice from './Slices/dialSlice';
import paymentSlice from './Slices/paymentSlice';
import userSlice from './Slices/userSlice';

export default configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
    dial: dialSlice,
    payment: paymentSlice,
    cart: cartSlice,
  },
});
