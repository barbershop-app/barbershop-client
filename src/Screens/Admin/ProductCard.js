import {View, Text} from 'react-native';
import React from 'react';
import AddProduct from './Product/AddProduct';
import RemoveProduct from './Product/RemoveProduct';
import UpdateProduct from './Product/UpdateProduct';

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
