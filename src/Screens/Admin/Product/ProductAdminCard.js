import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ProductAdminCard(props) {
  // console.log(props.item);
  return (
    <View
      style={{
        width: '90%',
        borderWidth: 1,
        alignSelf: 'center',
        margin: 5,
        borderRadius: 15,
        padding: 5,
      }}>
      <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
        {props.item.name}
      </Text>
      <Text style={{fontSize: 17, color: 'black', fontWeight: 'bold'}}>
        {props.item.description}
      </Text>
      <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
        ${props.item.price}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => props.updateProduct(props.item)}>
          <Text>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log(props.item.id)}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
