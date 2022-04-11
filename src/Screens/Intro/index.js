import {View, Text, Image} from 'react-native';
import React from 'react';
import MainButton from '../../Components/MainButton';
import {Images, windowHeight, windowWidth} from '../../Utils/Themes';
import {NavigationContainer} from '@react-navigation/native';
import {AUTH} from '../../Utils/RouteNames';
import {useDispatch} from 'react-redux';
import {resetData} from '../../Redux/Slices/dialSlice';

export default function Intro({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, backgroundColor: '#505050'}}>
      <Image
        style={{
          height: windowHeight * 0.24,
          width: windowWidth * 0.8,
          marginTop: 50,
          alignSelf: 'center',
        }}
        source={Images.Logo}
      />
      <Image
        style={{
          height: windowHeight * 0.5,
          width: windowWidth * 0.8,
          marginTop: 25,
          alignSelf: 'center',
        }}
        source={Images.BarberMan}
      />
      <MainButton
        onPressFunction={() => {
          navigation.navigate(AUTH);
          dispatch(resetData());
        }}
        width={80}
        title={'Bright My Hair ..'}
        center
        shadow
        bold
      />
    </View>
  );
}
