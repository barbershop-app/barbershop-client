import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {windowHeight, windowWidth} from '../Utils/Themes';
import {PRODUCT_PAGE} from '../Utils/RouteNames';

const CatalogProductCard = props => {
  console.log('catalogProductCard ' + props.catagoryId);
  return (
    <TouchableOpacity
      key={props.index}
      onPress={() =>
        props.navigation.navigate(PRODUCT_PAGE, {
          ...props.item,
          catagoryId: props.catagoryId,
        })
      }
      style={{
        margin: 10,
        borderRadius: 15,
        width: windowWidth,
        height: windowHeight * 0.17,
        borderBottomWidth: 1,
        width: windowWidth * 1,
        flexDirection: 'row',
      }}>
      <View
        key={props.index}
        style={{
          borderWidth: 1,
          margin: 5,
          width: '28%',
          height: windowHeight * 0.145,
          borderRadius: 15,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={{
            uri: props.item.imageSource,
          }}
        />
      </View>
      <View style={{width: '65%'}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 15,
            marginLeft: '5%',
            fontWeight: 'bold',
            color: 'black',
          }}>
          {props.item.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            position: 'absolute',
            bottom: 25,
            // left: '20%',
            right: '8%',
            color: 'red',
            textDecorationLine: 'line-through',
          }}>
          {props.item.onSale ? '$' + props.item.price.toFixed(2) : ''}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            position: 'absolute',
            bottom: 0,
            // left: '20%',
            right: '8%',
            color: 'black',
          }}>
          $
          {props.item.onSale
            ? (
                props.item.price -
                (props.item.price / 100) * props.item.onSalePercentage
              ).toFixed(2)
            : props.item.price.toFixed(2)}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatalogProductCard;
