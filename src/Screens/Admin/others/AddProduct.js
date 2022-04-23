import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainInputText from '../../../Components/MainInputText';
import MainButton from '../../../Components/MainButton';
import AlertOneButton from '../../../Components/AlertOneButton';
import HttpRequest from '../../../config/API/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });

  const handleAddProduct = async () => {
    if (productName.trim().length < 1 || productPrice.trim().length < 1) {
      setAlertData({
        title: 'Warning',
        message: 'Please fill all inputs',
        showAlert: true,
      });
      return;
    }

    const result = await HttpRequest('Market/CreateProduct', 'POST', {
      categoryId: 2,
      name: productName,
      descreption: 'string',
      price: productPrice,
      isAvailable: true,
      onSale: true,
      onSalePercentage: 0,
      imageSource: 'string',
    });

    if (result.status === 200) {
      setProductName('');
      setProductPrice('');

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
        Add a new Product:
      </Text>
      <View style={{}}>
        <MainInputText
          size={80}
          placeHolder={'Enter Product Name'}
          white
          setOnChangeText={setProductName}
          value={productName}
        />
        <View style={{width: '100%', margin: 5}} />
        <MainInputText
          size={80}
          placeHolder={'Enter Product Price'}
          white
          setOnChangeText={setProductPrice}
          value={productPrice}
        />
        <View style={{width: '100%', margin: 5}} />

        <View style={{margin: -5, width: '100%', marginLeft: 0}}>
          <MainButton
            width={30}
            height={50}
            title={'Add'}
            color={'white'}
            bold
            borderWidth={1}
            onPressFunction={handleAddProduct}
          />
        </View>
      </View>
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </View>
  );
}
