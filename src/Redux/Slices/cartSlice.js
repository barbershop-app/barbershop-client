import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    ResetCart(state, {type, payload}) {
      state.items = [];
    },
    AddToCart(state, {type, payload}) {
      const found = state.items.findIndex(e => e.id === payload.id) !== -1;

      state.items = found
        ? state.items
        : [...state.items, {...payload, quantity: 1}];
    },
    RemoveFromCart(state, {type, payload}) {
      const newData = state.items.filter(e => e.id !== payload.id);
      state.items = newData;
    },
    UpdateQuantity(state, {type, payload}) {
      state.items = state.items.map(item =>
        item.id === payload.id
          ? {...item, quantity: payload.newQuantity}
          : item,
      );
    },
  },
});

export const {ResetCart, AddToCart, RemoveFromCart, UpdateQuantity} =
  CartSlice.actions;
export default CartSlice.reducer;
