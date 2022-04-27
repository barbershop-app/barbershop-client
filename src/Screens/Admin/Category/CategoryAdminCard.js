import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {ADMINPRODUCTSLIST} from '../../../Utils/RouteNames';

export default function CategoryAdminCard(props) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate(ADMINPRODUCTSLIST, {item: props.item})
      }
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3%',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 15,
        }}
        source={{
          uri: props.item.imageSource,
        }}
      />
      <Text style={styles.textTitle}>{props.item.name}</Text>
      <TouchableOpacity onPress={() => props.deleteCategory(props.item.id)}>
        <Text style={[styles.textStyle, {color: 'black'}]}>Remove</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text style={styles.textStyle}>Update</Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
