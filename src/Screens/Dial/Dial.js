import {View, Text} from 'react-native';
import React from 'react';
import Square from './Square';
import {windowHeight, windowWidth} from '../../Utils/Themes';
import {useDispatch} from 'react-redux';
import DialSlice, {setDial} from '../../Redux/Slices/dialSlice';
export default function Dial() {
  const dispatch = useDispatch();

  const handleOnClick = value => {
    dispatch(setDial({value: value.toString()}));
  };

  return (
    <View
      style={{
        flex: windowHeight / 1000,
        flexWrap: 'wrap',
        width: windowWidth * 0.8,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'icon'].map((e, index) => (
        <Square handleOnClick={handleOnClick} value={e} key={index} />
      ))}
    </View>
  );
}
