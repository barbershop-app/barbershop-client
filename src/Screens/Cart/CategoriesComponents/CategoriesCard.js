import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {windowWidth} from '../../../Utils/Themes';
import {CATALOG_PRODUCTS_LIST} from '../../../Utils/RouteNames';

const CategoriesCard = props => {
  console.log(props.uri);
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
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'rgba(220, 220, 220,0.15)',
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
            uri:
              props.uri !== 'string'
                ? props.uri
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png',
          }}
        />
      </View>
      <View style={{alignSelf: 'center', alignItems: 'center'}}>
        <Text style={[styles.textStyle]}>{props.categoriesName}</Text>
        {/* <Text style={styles.textStyle}>{props.quantity} now</Text> */}
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
    maxHeight: '105%',
  },
});
export default CategoriesCard;
