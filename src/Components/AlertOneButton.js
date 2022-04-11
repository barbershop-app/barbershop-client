import {View, Text} from 'react-native';
import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const AlertOneButton = ({alertData, setAlertData, onPressOk}) => {
  //! title , message , showAlert
  return (
    <AwesomeAlert
      show={alertData.showAlert}
      showProgress={false}
      showCancelButton={true}
      showConfirmButton={false}
      title={alertData.title}
      message={alertData.message}
      closeOnTouchOutside={false}
      cancelText={'Ok'}
      confirmText={'Allow'}
      closeOnHardwareBackPress={false}
      titleStyle={{color: 'black', fontWeight: 'bold', fontSize: 20}}
      messageStyle={{color: 'black', fontWeight: 'bold', fontSize: 15}}
      cancelButtonColor="#D5BE2A"
      cancelButtonTextStyle={{
        color: 'black',
        fontWeight: 'bold',
        margin: 3,
        fontSize: 15,
      }}
      onCancelPressed={() => {
        setAlertData({...alertData, showAlert: false});
        onPressOk();
      }}
    />
  );
};

export default AlertOneButton;
