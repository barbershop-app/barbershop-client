import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MainButton from '../../../Components/MainButton';
import MainInputText from '../../../Components/MainInputText';
import HttpRequest from '../../../config/API/axios';
import AlertOneButton from '../../../Components/AlertOneButton';

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState('');
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });

  const addCategory = async () => {
    if (categoryName.trim().length < 1) {
      setAlertData({
        title: 'Warning',
        message: 'Please fill the input ',
        showAlert: true,
      });
      return;
    }

    const result = await HttpRequest('Market/CreateCategory', 'POST', {
      name: categoryName,
      imageSource: 'string',
    });

    if (result.status === 200) {
      setCategoryName('');
      // Category ID:
      // console.log(result.data.categoryId);
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
        Create Category:
      </Text>
      <View style={{flexDirection: 'row'}}>
        <MainInputText
          size={80}
          placeHolder={'Enter Category Name'}
          white
          setOnChangeText={setCategoryName}
          value={categoryName}
        />
        <View style={{margin: -5, width: '100%', marginLeft: 0}}>
          <MainButton
            width={20}
            height={50}
            title={'Add'}
            color={'white'}
            bold
            borderWidth={1}
            onPressFunction={addCategory}
          />
        </View>
      </View>
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </View>
  );
}
