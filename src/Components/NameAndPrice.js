import React from 'react';
import {Text, View} from 'react-native';

const NameAndPrice = ({data}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: '8%',
      alignSelf: 'center',
      marginTop: '5%',
      maxWidth: '100%',
      maxHeight: '8%',
    }}>
    <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
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
