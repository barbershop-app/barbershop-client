import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {windowWidth} from '../Utils/Themes';
import {CATALOG_PRODUCTS_LIST} from '../Utils/RouteNames';

const CategoriesCard = props => {
  return (
    <TouchableOpacity
      key={props.index}
      onPress={() =>
        props.navigation.navigate(CATALOG_PRODUCTS_LIST, {
          catalogName: props.categoriesName,
          categoryId: props.id,
        })
      }
      style={{
        borderWidth: 1,
        borderColor: 'white',
        margin: 5,
        borderRadius: 15,
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          borderRadius: 25,
          borderColor: 'white',
          margin: 3,
          padding: 5,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
          }}
          source={{
            uri: props.uri,
          }}
        />
      </View>
      <View style={{alignSelf: 'center', alignItems: 'center'}}>
        <Text style={[styles.textStyle]}>{props.categoriesName}</Text>
        <Text style={styles.textStyle}>{props.quantity} now</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    maxWidth: '100%',
    maxHeight: '50%',
  },
});
export default CategoriesCard;
