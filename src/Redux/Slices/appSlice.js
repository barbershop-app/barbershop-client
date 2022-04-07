import {createSlice} from '@reduxjs/toolkit';

const AppSlice = createSlice({
  name: 'app',
  initialState: {
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    setLoginIn(state, {type, payload}) {
      if (payload.isLoggedIn != null) state.isLoggedIn = payload.isLoggedIn;
    },
    setLoading(state, {type, payload}) {
      if (payload.isLoading != null) state.isLoading = payload.isLoading;
    },
  },
});

export const {setLoginIn, setLoading} = AppSlice.actions;
export default AppSlice.reducer;
