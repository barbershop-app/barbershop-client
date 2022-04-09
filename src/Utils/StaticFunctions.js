import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {Update} from '../Redux/Slices/cartSlice';
import UseDispatchCart from '../Hooks/UseDispatch';

export const AddToCartAsync = product => {
  AsyncStorage.getItem('cart-list').then(data => {
    let JsonData = JSON.parse(data);
    if (
      JsonData?.findIndex(e => e.id === product.id) !== -1 &&
      JsonData !== null
    ) {
      return false;
    } else {
      let newData = [];
      if (JsonData === null) {
        newData = [{...product, quantity: 1}];
      } else {
        newData = [...JsonData, {...product, quantity: 1}];
      }
      AsyncStorage.setItem('cart-list', JSON.stringify(newData));
    }
  });
};

// export const getCartList = () => {
//   return ;
// };

export const clearCartList = async () => {
  await AsyncStorage.removeItem('cart-list');
};

export const removeCartItem = id => {
  AsyncStorage.getItem('cart-list').then(data => {
    let newData = JSON.parse(data)?.filter(product => product.id !== id);
    AsyncStorage.setItem('cart-list', JSON.stringify(newData));
  });
};

export const changeQuantityAsyncStorage = (id, newQuantity) => {
  AsyncStorage.getItem('cart-list').then(data => {
    let newList = JSON.parse(data)?.map(item =>
      item.id === id ? {...item, quantity: newQuantity} : item,
    );
    AsyncStorage.setItem('cart-list', JSON.stringify(newList));
  });
};
