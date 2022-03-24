import {View, Text, Image} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import {windowHeight, windowWidth} from '../../Utils/Themes';
import MainCard from '../../Components/MainCard';
import Dial from '../Dial/Dial';
import {useDispatch, useSelector} from 'react-redux';
import MainButton from '../../Components/MainButton';

const Auth = () => {
  const data = useSelector(state => state.dial);
  useEffect(() => {
    console.log(data);
  }, []);
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={{backgroundColor: '#505050', flex: 1}}>
      <MainCard isYellow={false} size={80}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#505050',
            marginLeft: windowWidth * 0.03,
          }}>
          Enter your {'\n'}mobile number
        </Text>
        <Text style={{marginLeft: windowWidth * 0.03, fontSize: 15}}>
          We will send you confirmation code
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: windowWidth * 0.1,
              color: '#D5BE2A',
            }}>
            +972
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              color: '#505050',
            }}>
            {' '}
            {data.value}
          </Text>
        </View>
        <Dial />
        <MainButton width={80} title={'Next'} center />
      </MainCard>
    </View>
  );
};
export default Auth;
