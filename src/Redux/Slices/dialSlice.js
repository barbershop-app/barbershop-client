import {createSlice} from '@reduxjs/toolkit';

const DialSlice = createSlice({
  name: 'dial',
  initialState: {
    phoneNumber: '',
    code: '',
    isCodeSent: false,
  },
  reducers: {
    setDial(state, {payload}) {
      // * Checks if phoneNumber is not empty and the sent value is  not 0
      if (!(state.phoneNumber.length === 0 && payload.value == '0')) {
        if (payload.value !== 'icon' && state.phoneNumber.length < 9)
          state.phoneNumber += payload.value;
        else if (payload.value === 'icon')
          state.phoneNumber = state.phoneNumber.slice(0, -1);
      }
    },
    setCode(state, {payload}) {
      if (payload.value !== 'icon' && state.code.length < 4)
        state.code += payload.value;
      else if (payload.value === 'icon') state.code = state.code.slice(0, -1);
    },
    setIsCodeSent(state) {
      state.isCodeSent = !state.isCodeSent;
    },
    resetCode(state) {
      state.code = '';
    },
  },
});

export const {setDial, setCode, setIsCodeSent, resetCode} = DialSlice.actions;
export default DialSlice.reducer;
