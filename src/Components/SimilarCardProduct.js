import {View, Text, Image} from 'react-native';
import React from 'react';

const SimilarCardProduct = ({item}) => {
  return (
    <View style={{borderWidth: 1, margin: 5, borderRadius: 25}}>
      <Image
        alt={item.name + '_alt'}
        source={{uri: item.imageSource}}
        style={{width: 95, height: 95}}
      />
    </View>
  );
};

export default SimilarCardProduct;
