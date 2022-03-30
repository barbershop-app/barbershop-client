import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SpecialOfferCardProduct from './SpecialOfferCardProduct';

const testItems = [
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

const SpecialOffersList = () => {
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
          <SpecialOfferCardProduct item={e} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SpecialOffersList;
