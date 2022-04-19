import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {windowHeight, windowWidth} from '../Utils/Themes';
import {PRODUCT_PAGE} from '../Utils/RouteNames';
import {Gray_3} from '../Utils/Colors';

const CatalogProductCard = props => {
  return (
    <TouchableOpacity
      key={props.index}
      onPress={() =>
        props.navigation.navigate(PRODUCT_PAGE, {
          ...props.item,
        })
      }
      style={{
        borderRadius: 15,
        width: windowWidth * 0.43,
        height: windowHeight * 0.35,
        backgroundColor: 'white',
        margin: '2%',
        alignSelf: 'center',
      }}>
      <View
        key={props.index}
        style={{
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: '50%',
            height: '60%',
          }}
          source={{
            uri: props.item.imageSource,
          }}
        />
      </View>
      <View style={{marginLeft: '5%'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'red',
            textDecorationLine: 'line-through',
          }}>
          {props.item.onSale ? props.item.price.toFixed(2) + '$' : ''}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {props.item.onSale
            ? (
                props.item.price -
                (props.item.price / 100) * props.item.onSalePercentage
              ).toFixed(2)
            : props.item.price.toFixed(2)}
          $
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginTop: 10,
            marginLeft: '5%',
            fontWeight: 'bold',
            color: 'black',
            maxWidth: '90%',
            marginBottom: '5%',
          }}>
          {props.item.name} bla bla bla bla
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatalogProductCard;
