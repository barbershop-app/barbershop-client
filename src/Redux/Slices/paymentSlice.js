import {createSlice} from '@reduxjs/toolkit';

const PaymentSlice = createSlice({
  name: 'payment',
  initialState: {
    method: '',
    visaLast4Digits: '',
  },
  reducers: {
    setMethod(state, {type, payload}) {
      switch (payload.type.method) {
        case 'debitCard':
          state.method = 'debitCard';
          state.visaLast4Digits = payload.type.visaDigits.slice(
            payload.type.visaDigits.length - 4,
          );
          break;
        case 'creditCard':
          state.method = 'creditCard';
          state.visaLast4Digits = payload.type.visaDigits.slice(
            payload.type.visaDigits.length - 4,
          );
          break;
        case 'cash':
          state.method = 'cash';
          break;
        default:
          state.method = null;
          state.visaLast4Digits = null;
          break;
      }
    },
    resetMethod(state, {type, payload}) {
      state.method = null;
      state.visaLast4Digits = null;
    },
  },
});

export const {setMethod, resetMethod} = PaymentSlice.actions;
export default PaymentSlice.reducer;
