import {View, Text} from 'react-native';
import React from 'react';
import Square from './Square';
import {windowHeight, windowWidth} from '../../Utils/Themes';
import {useDispatch, useSelector} from 'react-redux';
import DialSlice, {setDial, setCode} from '../../Redux/Slices/dialSlice';
export default function Dial({disabled}) {
  const dispatch = useDispatch();
  const isCodeSent = useSelector(state => state.dial.isCodeSent);
  const handleOnClick = value => {
    if (!isCodeSent) dispatch(setDial({value: value.toString()}));
    else dispatch(setCode({value: value.toString()}));
  };

  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        width: windowWidth * 0.8,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'icon'].map((e, index) => (
        <Square
          disabled={disabled}
          handleOnClick={handleOnClick}
          value={e}
          key={index}
        />
      ))}
    </View>
  );
}
