import {View, Text, TouchableOpacity, Image} from 'react-native';
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
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '70%', maxWidth: '70%'}}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
            {props.item.name}
          </Text>
          <Text style={{fontSize: 17, color: 'black', fontWeight: 'bold'}}>
            {props.item.description}
          </Text>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
            ${props.item.price}
          </Text>
        </View>
        <View style={{width: '30%', maxWidth: '30%', alignSelf: 'center'}}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: props.item.imageSource}}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => props.updateProduct(props.item)}>
          <Text style={{color: 'black'}}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.removeProduct(props.item.id)}>
          <Text style={{color: 'black'}}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
