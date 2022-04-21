import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {PRODUCT_PAGE} from '../../Utils/RouteNames';

const SimilarCardProduct = props => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate(PRODUCT_PAGE, {
          ...props.item,
          categoryId: props.categoryId,
        })
      }
      style={{borderWidth: 1, margin: 5, borderRadius: 25}}>
      <Image
        alt={props.item.name + '_alt'}
        source={{uri: props.item.imageSource}}
        style={{width: 95, height: 95}}
      />
    </TouchableOpacity>
  );
};

export default SimilarCardProduct;
