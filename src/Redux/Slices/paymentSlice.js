import {createSlice} from '@reduxjs/toolkit';

const PaymentSlice = createSlice({
    name:"payment",
    initialState: {
    method: 'debitCard',
    visaLast4Digits:'5555',
    },
  reducers: {
    setMethod(state, {type,payload}) {
        switch (payload.method) {
            case "debitCard":
                state.method = "debitCard";
                state.visaLast4Digits = payload.visaLast4Digits;
                break;
                case "creditCard":
                    state.method = "creditCard";
                    state.visaLast4Digits = payload.visaLast4Digits;
                    break;
            case "cash":
                state.method='cash';
            default:
                state.method=null;
                state.visaLast4Digits=null;
                break;
        }
    },
    resetMethod(state,{type,payload}){
        state.method=null;
        state.visaLast4Digits=null;
    }
  },
});

export const {setMethod,resetMethod} = PaymentSlice.actions;
export default PaymentSlice.reducer;
