import React from 'react';
import {Text, View} from 'react-native';

const NameAndPrice = ({data}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      height: '20%',
      alignSelf: 'center',
      marginTop: '5%',
      maxWidth: '100%',
      maxHeight: '20%',
    }}>
    <Text
      style={{fontSize: 20, color: 'black', fontWeight: 'bold', width: '80%'}}>
      {data.name}
    </Text>
    <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
      $
      {data.onSale
        ? (data.price - (data.price / 100) * data.onSalePercentage).toFixed(2)
        : data.price.toFixed(2)}{' '}
    </Text>
  </View>
);
export default NameAndPrice;
