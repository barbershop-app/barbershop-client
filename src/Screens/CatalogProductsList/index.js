import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import CatalogProductCard from '../../Components/CatalogProductCard';
import TitleAndArrow from '../../Components/TitleAndArrow';
import HttpRequest from '../../config/API/axios';

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
const CatalogProductsList = props => {
  const params = props.route.params;
  useEffect(() => {
    HttpCall();
  }, []);
  const HttpCall = async () => {
    const result = await HttpRequest(
      `​market/getallproductsbycategoryid/${params.catalogId}`,
      'GET',
      '',
    );
  };
  return (
    <View>
      <TitleAndArrow navigation={props.navigation} title={params.catalogName} />
      {/* <Text>{params.catalogName}</Text> */}

      {testItems?.map((item, index) => (
        <CatalogProductCard
          navigation={props.navigation}
          key={index}
          index={index}
          item={item}
        />
      ))}
    </View>
  );
};
export default CatalogProductsList;
