import {View, Text} from 'react-native';
import React from 'react';
import AddProduct from './AddProduct';
import RemoveProduct from './RemoveProduct';
import UpdateProduct from './UpdateProduct';

export default function ProductCard() {
  return (
    <View>
      {/* Product */}
      <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
        Product
      </Text>
      {/* Add */}
      <AddProduct />

      {/* Remove */}
      {/* <RemoveProduct /> */}

      {/* Update */}
      {/* <UpdateProduct /> */}
    </View>
  );
}
