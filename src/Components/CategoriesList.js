import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import CategoriesCard from './CategoriesCard';

const list = [
  {
    uri: 'https://image.shutterstock.com/image-illustration/green-circle-essential-oil-organic-260nw-282243968.jpg',
    quantity: 15,
    categoriesName: 'Oil',
  },
  {
    uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/beard-3401062-2838296.png',
    quantity: 4,
    categoriesName: 'Bread tools',
  },
  {
    uri: 'https://aux2.iconspalace.com/uploads/perfume-icon-256.png',
    quantity: 2,
    categoriesName: 'Perfume',
  },
  ,
  {
    uri: 'https://aux2.iconspalace.com/uploads/perfume-icon-256.png',
    quantity: 10,
    categoriesName: 'test',
  },
];
const CategoriesList = props => {
  return (
    <View style={{marginTop: '5%'}}>
      <Text
        style={{
          fontSize: 13,
          color: 'black',
          marginLeft: '5%',
          fontWeight: 'bold',
        }}>
        Categories
      </Text>
      <ScrollView horizontal={true} style={{marginLeft: '5%'}}>
        {list?.map((item, index) => (
          <CategoriesCard
            navigation={props.navigation}
            key={index}
            uri={item.uri}
            categoriesName={item.categoriesName}
            quantity={item.quantity}
            onPressFunction={() => {
              console.log(item.categoriesName);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesList;
