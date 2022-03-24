import { createSlice, PayloadAction } from '@reduxjs/toolkit'




const initialState = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    createDate: '',
    isActive: false
}

export const UserSlice = createSlice({
  name: 'create',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.id =  action.payload,
      state.firstName= action.payload,
      state.lastName= action.payload,
      state.phoneNumber= action.payload,
      state.createDate= action.payload,
      state.isActive= action.payload
      state = action.payload // mutate the state all you want with immer
    }
  }
})

export const { setUserName } = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state) => state.user

export default UserSlice.reducer