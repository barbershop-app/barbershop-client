import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'create',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    id: null,
    isAdmin: false,
    firstName: null,
    lastName: null,
    token: null,
  },
  reducers: {
    setUser(state, {type, payload}) {
      state.id = payload.id;
      state.isAdmin = payload.isAdmin;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.token = payload.token;
    },
  },
});

export const {setUser} = UserSlice.actions;
export default UserSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
//* export const selectUser = (state) => state.user
