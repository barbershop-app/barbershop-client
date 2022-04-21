import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../Utils/Themes';
import {PRODUCT_PAGE} from '../../Utils/RouteNames';

const SpecialOfferCardProduct = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(PRODUCT_PAGE, {
          ...props.item,
          categoryId: props.item.categoryId,
        });
      }}
      style={{
        margin: 5,
        borderRadius: 15,
        width: windowWidth * 0.8,
        height: windowHeight * 0.5,
        backgroundColor: 'rgba(220, 220, 220,0.1)',
      }}>
      <View
        style={{
          width: '100%',
          backgroundColor: props.index % 2 == 0 ? 'white' : 'black',
          height: '100%',
          top: 120,
          position: 'absolute',
          borderRadius: 15,
        }}
      />
      <View
        style={{
          margin: 5,
          width: '100%',
          alignSelf: 'center',
          borderRadius: 15,
        }}>
        <Image
          alt={props.index + '_IMG'}
          style={{
            width: windowWidth * 0.33,
            height: windowHeight * 0.3,
            alignSelf: 'center',
          }}
          source={{
            uri: props.item.imageSource,
          }}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: props.index % 2 == 0 ? 'black' : 'white',
            alignSelf: 'center',
          }}>
          {props.item.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: props.index % 2 == 0 ? 'black' : 'white',
            maxWidth: '90%',
            textAlign: 'center',
            marginTop: 10,
          }}>
          {props.item.description}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
        </Text>
        <View
          style={{
            width: windowWidth * 0.8,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: props.index % 2 == 0 ? 'black' : 'white',
              textAlign: 'right',
              margin: 10,
              width: '90%',
            }}>
            $
            {(
              props.item.price -
              (props.item.price / 100) * props.item.onSalePercentage
            ).toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SpecialOfferCardProduct;
