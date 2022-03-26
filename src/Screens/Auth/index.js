import {View, Text, Image} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import {windowHeight, windowWidth} from '../../Utils/Themes';
import MainCard from '../../Components/MainCard';
import Dial from '../Dial/Dial';
import {useDispatch, useSelector} from 'react-redux';
import MainButton from '../../Components/MainButton';
import TermsAndPolicy from '../../Components/TermsAndPolicy';
import {resetCode, setIsCodeSent} from '../../Redux/Slices/dialSlice';
import HttpRequest from '../../config/API/axios';

const Auth = () => {
  const data = useSelector(state => state.dial);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleNextScreen = () => {
    if (data.phoneNumber.length === 9) {
      dispatch(resetCode());
      dispatch(setIsCodeSent());
      const result = HttpRequest('users', 'create', 'POST', {
        PhoneNumber: '0' + data.phoneNumber,
      });
      console.log(result);
    }
  };
  return (
    <View style={{backgroundColor: '#505050', flex: 1}}>
      <MainCard isYellow={false} size={85}>
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
          {data.isCodeSent
            ? 'we sent it to the number +972 ' + data.phoneNumber
            : 'We will send you confirmation code'}
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
            {data.isCodeSent ? '' : '+972'}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              color: '#505050',
            }}>
            {' '}
            {(data.isCodeSent ? data.code : data.phoneNumber) + '|'}
          </Text>
        </View>
        <Dial />
        <MainButton
          onPressFunction={() => handleNextScreen()}
          width={80}
          title={data.isCodeSent ? 'Enter' : 'Next'}
          center
        />
        <TermsAndPolicy />
      </MainCard>
    </View>
  );
};
export default Auth;
