import {configureStore} from '@reduxjs/toolkit';
import appSlice from './Slices/appSlice';
import dialSlice from './Slices/dialSlice';
import userSlice from './Slices/userSlice';

export default configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
    dial: dialSlice,
  },
});
