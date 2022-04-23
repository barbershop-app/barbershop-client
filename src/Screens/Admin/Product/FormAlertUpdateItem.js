import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Dialog from 'react-native-dialog';
import {gradientColors} from '../../../Utils/Colors';
import {windowWidth} from '../../../Utils/Themes';

export default function FormAlertUpdateItem(props) {
  console.log(props.item.price);
  return (
    <Dialog.Container
      contentStyle={{
        borderRadius: 25,
        backgroundColor: 'white',
        borderWidth: 1,
      }}
      visible={props.visible}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: '90%',
          justifyContent: 'space-between',
        }}>
        <Dialog.Title
          style={{fontWeight: 'bold', color: 'black', width: '90%'}}>
          Item ID: {props.item.id}
        </Dialog.Title>
        <TouchableOpacity onPress={() => props.setVisible(false)}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: gradientColors[0],
            }}>
            X
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{width: '80%', marginLeft: '5%'}}>
        <TextInput
          style={{
            borderBottomWidth: 1,
            margin: 1,
            padding: -5,
            width: '100%',
            color: 'black',
          }}
          placeholderTextColor="gray"
          onChangeText={e => {
            props.setNewItem({...props.newItem, name: e});
          }}
          placeholder={'Name: ' + props.item.name}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            padding: -5,
            marginTop: 10,
            width: '100%',
            color: 'black',
            maxWidth: windowWidth * 0.8,
          }}
          placeholderTextColor="grey"
          onChangeText={e => {
            props.setNewItem({...props.newItem, description: e});
          }}
          placeholder={'Description: ' + props.item.description}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            padding: -5,
            marginTop: 10,
            width: '100%',
            color: 'black',
          }}
          placeholderTextColor="grey"
          keyboardType="numeric"
          onChangeText={e => {
            props.setNewItem({...props.newItem, price: e});
          }}
          placeholder={'price: ' + props.item.price}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            padding: -5,
            marginTop: 10,
            width: '100%',
            color: 'black',
            maxWidth: windowWidth * 0.8,
          }}
          placeholderTextColor="grey"
          onChangeText={e => {
            props.setNewItem({...props.newItem, imageSource: e});
          }}
          placeholder={'Image Url : ' + props.item.imageSource}
        />
      </View>
      <View style={{width: '100%', marginTop: 10}}>
        <Dialog.Button
          label="Create"
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '80%',
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: gradientColors[0],
          }}
          onPress={() => props.OnClickUpdate()}
        />
      </View>
    </Dialog.Container>
  );
}
