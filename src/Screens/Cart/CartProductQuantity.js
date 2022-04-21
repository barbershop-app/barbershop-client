import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const CartProductQuantity = ({itemId, quantity, changeQuantity}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '30%',
        justifyContent: 'space-between',
        position: 'absolute',
        left: '45%',
        bottom: '10%',
        width: '27%',
        alignItems: 'center',
      }}>
      <Icon
        onPress={() => changeQuantity(false, itemId)}
        name="minus"
        size={20}
        color="black"
        style={{
          borderWidth: 1,
          borderRadius: 7,
          alignSelf: 'center',
        }}
      />
      <Text style={{fontSize: 22, color: 'black'}}>{quantity}</Text>
      <Icon
        name="plus"
        size={20}
        color="black"
        onPress={() => changeQuantity(true, itemId)}
        style={{borderWidth: 1, borderRadius: 7, alignSelf: 'center'}}
      />
    </View>
  );
};

export default CartProductQuantity;
