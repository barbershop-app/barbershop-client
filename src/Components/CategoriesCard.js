import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {windowWidth} from '../Utils/Themes';
import {CATALOG_PRODUCTS_LIST} from '../Utils/RouteNames';

const CategoriesCard = props => {
  useEffect(() => {
    console.log(props.categoriesName);
  }, []);
  return (
    <TouchableOpacity
      key={props.index}
      onPress={() =>
        props.navigation.navigate(CATALOG_PRODUCTS_LIST, {
          catalogName: props.categoriesName,
        })
      }
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
            uri: props.uri,
          }}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.textStyle}>{props.categoriesName}</Text>
        <Text style={styles.textStyle}>{props.quantity} now</Text>
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
