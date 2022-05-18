import {View, Text, StatusBar, TextInput, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import TitleAndArrow from '../../Components/TitleAndArrow';
import MainCard from '../../Components/MainCard';
import MainButton from '../../Components/MainButton';
import Line90Width from '../BookingMenu/BookAppointment/Line90Width';
import SmallTitleAndValue from './SmallTitleAndValue';
import GrayBigTitle from './GrayBigTitle';
import TitleAndValueAndButton from './TitleAndValueAndButton';
import ContactUsDataArr from './ContactUsDataArr';
import Dialog from 'react-native-dialog';
import {useDispatch, useSelector} from 'react-redux';
import AlertOneButton from '../../Components/AlertOneButton';
import HttpRequest from '../../config/API/axios';
import {AUTH} from '../../Utils/RouteNames';
import {setLoginIn} from '../../Redux/Slices/appSlice';
import LinearGradient from 'react-native-linear-gradient';
import {Images, windowHeight, windowWidth} from '../../Utils/Themes';
import {COUNTRY_CODE} from '../../Utils/Rules';

const Settings = props => {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  const [visible, setVisible] = useState(false);
  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: '',
    firstNameToShow: '',
    lastNameToShow: '',
  });
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });

  useEffect(() => {
    setFullName({
      ...fullName,
      firstNameToShow: userData.firstName,
      lastNameToShow: userData.lastName,
    });
  }, []);

  const DeleteAccount = async () => {
    // POST
    // ​/api​/
    const result = await HttpRequest(
      `Users​/Delete​/${userData.id}`,
      'POST',
      {},
    );
    if (result.status === 200) {
      dispatch(setLoginIn(false));
      props.navigation.navigate(AUTH);
    } else {
      setAlertData({
        title: 'Something Went Wrong!',
        message: 'Please Try Again',
        showAlert: true,
      });
    }
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
      if (result.status === 200) {
        setAlertData({
          title: 'Updated!',
          message: 'Sucessfully Updated Name !',
          showAlert: true,
        });
        setVisible(false);
        setFullName({
          ...fullName,
          firstNameToShow: fullName.firstName,
          lastNameToShow: fullName.lastName,
        });
      } else
        setAlertData({
          title: 'Something Went Wrong!',
          message: 'Please Try Again',
          showAlert: true,
        });
    }
  };

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        'white',
        SelectedGradientColor[1],
        SelectedGradientColor[0],
        SelectedGradientColor[0],
        SelectedGradientColor[1],
      ]}>
      <TitleAndArrow navigation={props.navigation} title={'Settings'} />
      <Image
        style={{
          height: 170,
          width: 150,

          alignSelf: 'center',
        }}
        source={Images.BarberFrame}
      />
      <MainCard size={70}>
        <TitleAndValueAndButton
          bigTitle={'Name'}
          value={fullName.firstNameToShow + ' ' + fullName.lastNameToShow}
          button
          buttonTitle={'Edit'}
          buttonWidth={85}
          buttonHeight={45}
          onPressFunction={() => setVisible(true)}
        />

        <TitleAndValueAndButton
          bigTitle={'Number Phone'}
          value={COUNTRY_CODE + ' 50 790 7888'}
        />

        <Line90Width />

        <TitleAndValueAndButton
          bigTitle={'Close Account'}
          value={'Delete your account'}
          button
          padding={5}
          buttonTitle={'close account'}
          buttonWidth={95}
          buttonHeight={40}
          onPressFunction={() =>
            setAlertData({
              onPressOk: () => {
                DeleteAccount();
              },
              title: 'Delete Account!',
              message: 'Are You Sure You Want To Delete Your Account?',
              showAlert: true,
              showButtonOther: '',
            })
          }
        />

        <Line90Width />
        <ContactUsDataArr
          arr={[
            {title: 'Phone Number', value: COUNTRY_CODE + ' 50 790 7888'},
            {title: 'Email Address', value: 'aborkiamosaab@gmail.com'},
          ]}
        />
      </MainCard>
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
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </LinearGradient>
  );
};
export default Settings;
