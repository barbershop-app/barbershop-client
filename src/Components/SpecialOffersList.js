import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SpecialOfferCardProduct from './SpecialOfferCardProduct';
import HttpRequest from '../config/API/axios';
//! get data from db
const testItems = [
  {
    id: 1,
    categoryId: 0,
    name: 'test test test',
    price: 250,
    isAvailable: true,
    onSale: true,
    onSalePercentage: 25,
    imageSource:
      'https://media.gq-magazine.co.uk/photos/6013e45caa1bacc9780a6927/1:1/w_3000,h_3000,c_limit/Emporio%20Armani.png',
  },
  {
    id: 2,
    categoryId: 0,
    name: 'Perfume You Armani',
    price: 250,
    isAvailable: true,
    onSale: true,
    onSalePercentage: 25,
    imageSource:
      'https://media.gq-magazine.co.uk/photos/6013e45caa1bacc9780a6927/1:1/w_3000,h_3000,c_limit/Emporio%20Armani.png',
  },
  {
    id: 3,
    categoryId: 0,
    name: 'Perfume You Armani',
    price: 250,
    isAvailable: true,
    onSale: true,
    onSalePercentage: 25,
    imageSource:
      'https://media.gq-magazine.co.uk/photos/6013e45caa1bacc9780a6927/1:1/w_3000,h_3000,c_limit/Emporio%20Armani.png',
  },
];

const SpecialOffersList = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    HttpCall();
  }, []);

  const HttpCall = async () => {
    const result = await HttpRequest('Market/GetAllProducts', 'GET');
    if (result.status === 200)
      setData(result.data.products?.filter(e => e.onSale === true));
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 13,
          color: 'black',
          marginLeft: '5%',
          marginTop: '5%',
          fontWeight: 'bold',
        }}>
        Special Offers
      </Text>
      <ScrollView horizontal={true} style={{marginLeft: '5%'}}>
        {data.length > 0 &&
          data?.map((e, index) => (
            <SpecialOfferCardProduct
              navigation={props.navigation}
              key={index + 'KeyIndex'}
              item={e}
              index={index}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default SpecialOffersList;
