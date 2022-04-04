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
    if (data.isCodeSent === false) {
      if (data.phoneNumber.length === 9) {
        const result = HttpRequest('users/create', 'POST', {
          PhoneNumber: '0' + data.phoneNumber,
        });
        if (result.status === 200) {
          dispatch(resetCode());
          dispatch(setIsCodeSent());
        }
        console.log(result);
      }
    } else {
      if (data.code.length === 4) {
        const result = HttpRequest('users/Authenticate', 'POST', {
          PhoneNumber: '0' + data.phoneNumber,
          code: data.code,
        });
        if (result.status === 200) {
          console.log(result.data);
          //save the token in async
        } else {
          //! change to alert component
          console.log(result.status + 'error !');
        }
      }
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
        <Text
          style={{
            marginLeft: windowWidth * 0.03,
            fontSize: 15,
            color: '#505050',
          }}>
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
