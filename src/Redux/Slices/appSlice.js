import {createSlice} from '@reduxjs/toolkit';
import { gradientColors_1 } from '../../Utils/Colors';

const AppSlice = createSlice({
  name: 'app',
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    selectedColor:false,
    colorNumber:gradientColors_1
  },
  reducers: {
    setSelectedColor(state, {type, payload}) {
      console.log(payload)
      if (payload.selectedColor !== true){
         state.selectedColor = true;
         state.colorNumber = payload.split(",")
        }
        else{
          console.log('selected Color Before')
        }
    },
    setLoginIn(state, {type, payload}) {
      if (payload.isLoggedIn != null) state.isLoggedIn = payload.isLoggedIn;
    },
    setLoading(state, {type, payload}) {
      if (payload.isLoading != null) state.isLoading = payload.isLoading;
    },
  },
});

export const {setLoginIn, setLoading,setSelectedColor} = AppSlice.actions;
export default AppSlice.reducer;
