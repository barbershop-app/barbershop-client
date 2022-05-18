import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Dialog from 'react-native-dialog';
import {windowWidth} from '../../../Utils/Themes';
import MainButton from '../../../Components/MainButton';
import {useIsFocused} from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function FormAlertUpdateItem(props) {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  const [onSale, setOnSale] = useState(false);
  const isFocused = useIsFocused();
  console.log(props.item.price);

  useEffect(() => {
    setOnSale(props.item.onSale);
    console.log(props.item.onSale);
  }, [isFocused]);

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
              color: SelectedGradientColor[0],
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
          }}
          placeholderTextColor="grey"
          keyboardType="numeric"
          onChangeText={e => {
            props.setNewItem({...props.newItem, onSalePercentage: e});
          }}
          placeholder={'precent of sale: ' + props.item.onSalePercentage}
        />
        <Text style={{marginTop: 15, fontWeight: 'bold', color: 'black'}}>
          On Sale?
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MainButton
            disabled={onSale}
            color={onSale ? SelectedGradientColor[0] : 'gray'}
            width={35}
            title={'On Sale'}
            titleColor={onSale ? 'white' : 'black'}
            bold
            onPressFunction={() => {
              props.setNewItem({...props.newItem, onSale: !onSale});
              setOnSale(!onSale);
            }}
          />
          <MainButton
            disabled={!onSale}
            width={55}
            bold
            titleColor={!onSale ? 'white' : 'black'}
            title={'Nope'}
            color={!onSale ? SelectedGradientColor[0] : 'gray'}
            onPressFunction={() => {
              props.setNewItem({...props.newItem, onSale: !onSale});
              setOnSale(!onSale);
            }}
          />
        </View>
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
      <View
        style={{
          borderWidth: 1,
          borderRadius: 15,
          width: '90%',
          height: 100,
          flexDirection: 'row',
          padding: 10,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image
          style={{
            width: '25%',
            height: '100%',
          }}
          source={{uri: props.item.imageSource}}
        />
        <Image
          style={{
            width: '25%',
            height: '100%',
          }}
          source={{
            uri:
              props.item.imageSource === props.newItem.imageSource
                ? 'https://www.freeiconspng.com/thumbs/question-mark-icon/black-question-mark-icon-clip-art-10.png'
                : props.newItem.imageSource,
          }}
        />
      </View>
      <View style={{width: '100%', marginTop: 10}}>
        <Dialog.Button
          label="Update"
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '80%',
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: SelectedGradientColor[0],
          }}
          onPress={() => props.OnClickUpdate()}
        />
      </View>
    </Dialog.Container>
  );
}
