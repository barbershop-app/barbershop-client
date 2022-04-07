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
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import AlertOneButton from '../../Components/AlertOneButton';
import {setUser} from '../../Redux/Slices/userSlice';
import {setApp, setLoginIn} from '../../Redux/Slices/appSlice';

const Auth = props => {
  const dialData = useSelector(state => state.dial);
  const userData = useSelector(state => state.user);

  const dispatch = useDispatch();
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });
  useEffect(() => {
    console.log(dialData);
  }, [dialData]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleNextScreen = async () => {
    if (dialData.isCodeSent === false) {
      if (dialData.phoneNumber.length === 9) {
        const result = await HttpRequest('users/create', 'POST', {
          PhoneNumber: '0' + dialData.phoneNumber,
        });
        // console.log(result);

        if (result.status === 200) {
          dispatch(resetCode());
          dispatch(setIsCodeSent());
        }
      } else {
        setAlertData({
          title: 'Incorrect Format Number Phone!',
          message: 'Please Try Again',
          showAlert: true,
        });
      }
    } else {
      if (dialData.code.length === 4) {
        const result = await HttpRequest('users/Authenticate', 'POST', {
          PhoneNumber: '0' + dialData.phoneNumber,
          code: dialData.code,
        });
        if (result.status === 200) {
          await AsyncStorage.setItem(
            'barbershop',
            JSON.stringify(result.data),
          ).then(async () => {
            dispatch(setUser(result.data));
            dispatch(setLoginIn({isLoggedIn: true}));
          });
        } else {
          setAlertData({
            title: 'Incorrect Code!',
            message: 'Please Try Again',
            showAlert: true,
          });
        }
      } else {
        setAlertData({
          title: 'Incorrect Code!',
          message: 'Please Try Again',
          showAlert: true,
        });
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
          {dialData.isCodeSent
            ? 'we sent it to the number +972 ' + dialData.phoneNumber
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
            {dialData.isCodeSent ? '' : '+972'}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              color: '#505050',
            }}>
            {' '}
            {(dialData.isCodeSent ? dialData.code : dialData.phoneNumber) + '|'}
          </Text>
        </View>
        <Dial />
        <MainButton
          onPressFunction={() => handleNextScreen()}
          width={80}
          title={dialData.isCodeSent ? 'Enter' : 'Next'}
          center
        />
        <TermsAndPolicy />
      </MainCard>

      {/* alerts */}
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </View>
  );
};
export default Auth;
