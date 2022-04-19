import {View, Text, Image, TextInput} from 'react-native';
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
import Dialog from 'react-native-dialog';
import {Gray_1, Gray_3, Gray_5} from '../../Utils/Colors';

const Auth = props => {
  const dialData = useSelector(state => state.dial);
  const userData = useSelector(state => state.user);

  const dispatch = useDispatch();
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleNextScreen = async () => {
    setLoading(true);
    if (dialData.isCodeSent === false) {
      if (dialData.phoneNumber.length === 9) {
        const result = await HttpRequest('users/create', 'POST', {
          PhoneNumber: '0' + dialData.phoneNumber,
        });

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

            if (result.data.firstName === null) {
              setVisible(true);
            } else {
              dispatch(setLoginIn({isLoggedIn: true}));
            }
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
    setLoading(false);
  };

  const handleUpdateFullName = async () => {
    if (
      fullName.firstName.trim().length >= 3 &&
      fullName.lastName.trim().length >= 3
    ) {
      const result = await HttpRequest('Users/Update', 'POST', {
        id: userData.id,
        firstName: fullName.firstName,
        lastName: fullName.lastName,
      });
      if (result.status === 200) dispatch(setLoginIn({isLoggedIn: true}));
      else
        setAlertData({
          title: 'Something Went Wrong!',
          message: 'Please Try Again',
          showAlert: true,
        });
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
              color: Gray_1,
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
          fontSize={18}
          color={'black'}
          titleColor={'white'}
          bold
          borderWidth={1}
          onPressFunction={() => handleNextScreen()}
          width={80}
          disabled={loading}
          title={
            loading ? 'Loading...' : dialData.isCodeSent ? 'Enter' : 'Next'
          }
          center
        />
        <TermsAndPolicy />
      </MainCard>

      {/* alerts */}
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
      <Dialog.Container
        contentStyle={{
          borderRadius: 25,
          backgroundColor: 'white',
          borderWidth: 1,
        }}
        visible={visible}>
        <Dialog.Title style={{fontWeight: 'bold', color: 'black'}}>
          Enter your details
        </Dialog.Title>
        {/* <Dialog.input></Dialog.input> */}
        <View style={{width: '80%', marginLeft: '5%'}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              margin: 1,
              padding: -5,
              width: '100%',
              color: 'black',
            }}
            placeholderTextColor="gray"
            value={undefined}
            maxlength={3}
            onChangeText={e => setFullName({...fullName, firstName: e})}
            placeholder="FirstName"
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              padding: -5,
              marginTop: 10,
              width: '100%',
              color: 'black',
            }}
            placeholderTextColor="grey"
            value={undefined}
            maxlength={3}
            onChangeText={e => setFullName({...fullName, lastName: e})}
            placeholder="LastName"
          />
        </View>
        <View style={{width: '100%', marginTop: 10}}>
          <Dialog.Button
            label="Update"
            style={{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '80%',
              borderWidth: 1,
              borderRadius: 15,
              backgroundColor: '#D5BE2A',
            }}
            onPress={handleUpdateFullName}
          />
        </View>
      </Dialog.Container>
    </View>
  );
  9;
};
export default Auth;
