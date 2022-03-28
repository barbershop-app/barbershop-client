import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowWidth} from '../Utils/Themes';

const CategoriesCard = ({uri, categoriesName, quantity, onPressFunction}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={{
        width: windowWidth * 0.3,
        flexDirection: 'row',
        borderWidth: 1,
        margin: 5,
        borderRadius: 15,
        justifyContent: 'space-around',
      }}>
      <View style={{borderRadius: 25, borderWidth: 1, margin: 3}}>
        <Image
          style={{
            width: 35,
            height: 35,
            borderRadius: 25,
          }}
          source={{
            uri: uri,
          }}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.textStyle}>{categoriesName}</Text>
        <Text style={styles.textStyle}>{quantity} now</Text>
      </View>
      <View></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default CategoriesCard;
