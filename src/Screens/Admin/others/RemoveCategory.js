import {View, Text} from 'react-native';
import React, {useState} from 'react';
import HttpRequest from '../../../config/API/axios';
import AlertOneButton from '../../../Components/AlertOneButton';
import MainButton from '../../../Components/MainButton';
import MainInputText from '../../../Components/MainInputText';

export default function RemoveCategory() {
  const [categoryId, setCategoryId] = useState('');
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });

  const removeCategory = async () => {
    if (categoryId.trim() === '') {
      setAlertData({
        title: 'Warning',
        message: 'Please fill the input ',
        showAlert: true,
      });
      return;
    }

    const result = await HttpRequest(
      `Market/DeleteCategory/${categoryId}`,
      'POST',
      {
        id: categoryId,
      },
    );

    if (result.status === 200) {
      setCategoryId('');

      setAlertData({
        title: 'Successful',
        message: result.data.message,
        showAlert: true,
      });
    } else
      setAlertData({
        title: 'Warning',
        message: 'Something went wrong!',
        showAlert: true,
      });
  };

  return (
    <View>
      <Text
        style={{fontSize: 25, color: 'black', marginTop: 10, marginBottom: 10}}>
        Remove Category
      </Text>
      <View style={{flexDirection: 'row'}}>
        <MainInputText
          size={80}
          white
          placeHolder={'Enter Category Id'}
          setOnChangeText={setCategoryId}
          value={categoryId}
        />
        <View style={{margin: -5, width: '100%', marginLeft: 0}}>
          <MainButton
            width={20}
            height={50}
            title={'Remove'}
            color={'white'}
            bold
            borderWidth={1}
            onPressFunction={removeCategory}
          />
        </View>
      </View>
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </View>
  );
}
