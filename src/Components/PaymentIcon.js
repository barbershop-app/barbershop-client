import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const PaymentIcon = props => {
  const selectMethod = () => {
    props.selectMethod(props.item.id);
  };
  return (
    <TouchableOpacity style={{marginTop: '7%'}} onPress={() => selectMethod()}>
      <View
        style={{
          backgroundColor: props.item.isSelected ? 'white' : 'transparent',
          borderWidth: 1,
          borderRadius: 25,
          padding: 10,
        }}>
        <Image
          style={{width: 60, height: 60}}
          source={{uri: props.item.imageSource}}
        />
      </View>
      <Text style={{alignSelf: 'center'}}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

export default PaymentIcon;
