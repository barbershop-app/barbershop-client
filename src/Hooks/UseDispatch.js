import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Update} from '../Redux/Slices/cartSlice';

const UseDispatchCart = props => {
  const dispatch = useDispatch();

  dispatch(Update(props.functionName));

  return <></>;
};

export default UseDispatchCart;
