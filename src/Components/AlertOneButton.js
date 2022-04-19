import {View, Text} from 'react-native';
import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const AlertOneButton = ({
  showButtonOther,
  hideButton,
  alertData,
  setAlertData,
}) => {
  //! title , message , showAlert
  return (
    <AwesomeAlert
      show={alertData.showAlert}
      showProgress={false}
      showCancelButton={hideButton === undefined ? true : false}
      showConfirmButton={showButtonOther === undefined ? false : true}
      title={alertData.title}
      message={alertData.message}
      closeOnTouchOutside={false}
      cancelText={'Ok'}
      confirmText={'No Dont Delete!'}
      closeOnHardwareBackPress={false}
      titleStyle={{color: 'black', fontWeight: 'bold', fontSize: 20}}
      messageStyle={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
      }}
      cancelButtonColor="black"
      cancelButtonTextStyle={{
        color: 'white',
        fontWeight: 'bold',
        margin: 3,
        fontSize: 15,
      }}
      confirmButtonColor="#D5BE2A"
      confirmButtonTextStyle={{
        color: 'black',
        fontWeight: 'bold',
        margin: 3,
        fontSize: 15,
      }}
      onCancelPressed={() => {
        setAlertData({...alertData, showAlert: false});
        alertData.onPressOk === undefined
          ? console.log('nothing')
          : alertData.onPressOk();
      }}
      onConfirmPressed={() => {
        setAlertData({...alertData, showAlert: false});
      }}
    />
  );
};

export default AlertOneButton;
