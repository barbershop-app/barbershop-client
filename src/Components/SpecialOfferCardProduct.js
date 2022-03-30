import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utils/Themes';

const SpecialOfferCardProduct = props => {
  return (
    <TouchableOpacity
      key={props.key}
      style={{
        borderWidth: 1,
        margin: 5,
        borderRadius: 15,
        width: windowWidth * 0.3,
        height: windowHeight * 0.2,
      }}>
      <View
        key={props.key}
        style={{
          borderWidth: 1,
          margin: 5,
          width: '65%',
          alignSelf: 'center',
          borderRadius: 15,
        }}>
        <Image
          style={{
            width: '100%',
            height: 80,
          }}
          source={{
            uri: props.item.imageSource,
          }}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 13, fontWeight: 'bold'}}>
          {props.item.name.substr(0, 12)}..
        </Text>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>
          $
          {props.item.price -
            (props.item.price / 100) * props.item.onSalePercentage}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SpecialOfferCardProduct;
