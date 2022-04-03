import {View, Text, Image} from 'react-native';
import React from 'react';

const CashForm = props => {
  return (
    <View style={{alignSelf: 'center', marginTop: 25, alignItems: 'center'}}>
      <Image
        style={{width: 170, height: 170}}
        source={{uri: props.imageSource}}
      />
      <Text
        style={{
          fontSize: 25,
          marginTop: 25,
          fontWeight: 'bold',
          color: 'black',
          opacity: 0.5,
        }}>
        Cash On PickUp Order
      </Text>
    </View>
  );
};

export default CashForm;
