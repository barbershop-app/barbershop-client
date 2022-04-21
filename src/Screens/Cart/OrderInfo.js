import {View, Text} from 'react-native';
import React from 'react';

const OrderInfo = ({totalPrice, shippingFee}) => {
  return (
    <View style={{marginTop: '5%', marginLeft: '5%'}}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Order Info
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'white',
            opacity: 0.7,
          }}>
          Subtotal
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'white',
            opacity: 0.7,
          }}>
          ${totalPrice.toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          marginTop: 5,
        }}>
        <Text
          style={{
            marginTop: 5,
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Total
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 23, color: 'black'}}>
          ${(totalPrice + shippingFee).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default OrderInfo;
