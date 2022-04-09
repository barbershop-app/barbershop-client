import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HttpRequest from '../../config/API/axios';
import {useDispatch} from 'react-redux';
import {setUser} from '../../Redux/Slices/userSlice';
import {setLoginIn} from '../../Redux/Slices/appSlice';
import {AUTH, HOME} from '../../Utils/RouteNames';

export default function Splash({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    HttpCall();
  });

  const HttpCall = async () => {
    const result = await HttpRequest('users/IsLoggedIn', 'GET', '');
    setTimeout(() => {
      if (result.status === 200) {
        dispatch(setUser(result.data));
        dispatch(setLoginIn({isLoggedIn: true}));
      } else {
        AsyncStorage.removeItem('barbershop');
      }
    }, 1500);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#D5BE2A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Animatable.View animation={animation_0} iterationCount={'infinite'}>
          <Image
            style={{
              width: 60,
              height: 100,
              transform: [{rotate: '90deg'}],
            }}
            source={{
              uri: 'https://www.pikpng.com/pngl/b/91-919025_barber-shears-png-hair-salon-scissors-png-clipart.png',
            }}
          />
        </Animatable.View>
      </View>
      <Animatable.Text
        animation="swing"
        iterationCount={'infinite'}
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: 10,
        }}
        direction="alternate">
        {'Loading...'}
      </Animatable.Text>
    </View>
  );
}

const animation_0 = {
  0: {
    opacity: 0.3,
    marginRight: 250,
    marginLeft: 0,
  },
  0.2: {
    opacity: 1,
    marginRight: 0,
    marginLeft: 0,
  },
  0.8: {
    opacity: 1,
    marginRight: 0,
    marginLeft: 0,
  },
  1: {
    opacity: 0,
    marginRight: 0,
    marginLeft: 250,
  },
};
