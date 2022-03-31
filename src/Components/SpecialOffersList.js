import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SpecialOfferCardProduct from './SpecialOfferCardProduct';
//! get data from db
const testItems = [
  {
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
        {testItems?.map((e, index) => (
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
