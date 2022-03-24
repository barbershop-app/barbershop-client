import {createSlice} from '@reduxjs/toolkit';

const DialSlice = createSlice({
  name: 'diall',
  initialState: {
    value: '',
  },
  reducers: {
    setDial(state, {payload}) {
      if (payload.value !== 'icon') state.value += payload.value;
      else state.value = state.value.slice(0, -1);
      console.log(payload.value);
      console.log(state.value);
    },
  },
});

export const {setDial} = DialSlice.actions;
export default DialSlice.reducer;
