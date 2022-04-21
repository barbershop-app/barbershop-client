import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCartCard from './ProductCartCard';
import {windowHeight} from '../../Utils/Themes';

const MyCartComponent = props => {
  const changeQuantity = (id, newQuantity) => {
    props.changeQuantity(id, newQuantity);
  };

  const removeItem = id => {
    props.removeItem(id);
  };
  return (
    <View style={{height: windowHeight * 0.55}}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          marginTop: '10%',
          marginLeft: '5%',
        }}>
        My Cart
      </Text>
      <ScrollView
        style={{
          height: '50%',
          borderRadius: 15,
          borderWidth: 1,
          width: '98%',
          alignSelf: 'center',
        }}>
        {props.tempData?.map((e, index) => (
          <ProductCartCard
            key={index}
            item={e}
            removeItem={id => removeItem(id)}
            changeQuantity={(id, newQuantity) =>
              changeQuantity(id, newQuantity)
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MyCartComponent;
