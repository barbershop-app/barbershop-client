import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Dialog from 'react-native-dialog';
import {windowWidth} from '../../../Utils/Themes';
import MainButton from '../../../Components/MainButton';
import { useSelector } from 'react-redux';

export default function FormAlertCreateItem(props) {
  console.log(props.item.price);
  const [isAvailable, setIsAvailable] = useState(true);
  const [onSale, setOnSale] = useState(false);
  const [salePrecent, setSalePrecent] = useState(0);
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);

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
          style={{fontWeight: 'bold', color: 'black', width: '80%'}}>
          Create Product
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
          placeholder={'Product Name'}
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
          placeholder={'Description'}
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
          placeholder={'price'}
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
          placeholder={'Image Url (optional)'}
        />
        <View
          style={{
            marginTop: 5,
            borderWidth: 1,
            borderRadius: 15,
            height: 200,
            padding: 5,
            width: 200,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: '60%', height: '75%', alignSelf: 'center'}}
            source={{
              uri:
                props.newItem.imageSource === undefined
                  ? 'https://www.freeiconspng.com/thumbs/question-mark-icon/black-question-mark-icon-clip-art-10.png'
                  : props.newItem.imageSource,
            }}
          />
        </View>
        <Text style={{marginTop: 15, fontWeight: 'bold', color: 'black'}}>
          Is Available?
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MainButton
            disabled={isAvailable}
            color={isAvailable ? SelectedGradientColor[0] : 'gray'}
            width={35}
            title={'Available'}
            titleColor={isAvailable ? 'white' : 'black'}
            bold
            onPressFunction={() => setIsAvailable(!isAvailable)}
          />
          <MainButton
            disabled={!isAvailable}
            width={55}
            bold
            titleColor={!isAvailable ? 'white' : 'black'}
            title={'Not Available'}
            color={!isAvailable ? SelectedGradientColor[0] : 'gray'}
            onPressFunction={() => setIsAvailable(!isAvailable)}
          />
        </View>
        {/* //! on sale */}
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
            onPressFunction={() => setOnSale(!onSale)}
          />
          <MainButton
            disabled={!onSale}
            width={55}
            bold
            titleColor={!onSale ? 'white' : 'black'}
            title={'Nope'}
            color={!onSale ? SelectedGradientColor[0] : 'gray'}
            onPressFunction={() => setOnSale(!onSale)}
          />
        </View>
        {onSale ? (
          <TextInput
            style={{
              borderBottomWidth: 1,
              padding: -5,
              marginTop: 10,
              width: '50%',
              color: 'black',

              maxWidth: windowWidth * 0.8,
            }}
            keyboardType="numeric"
            placeholderTextColor="grey"
            onChangeText={e => {
              setSalePrecent(e);
            }}
            placeholder={'Sale Precent'}
          />
        ) : (
          <></>
        )}

        <Dialog.Button
          label="Create"
          style={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            borderWidth: 1,
            marginTop: 25,
            borderRadius: 15,
            backgroundColor: SelectedGradientColor[1],
          }}
          onPress={() => {
            console.log(salePrecent);
            props.OnClickCreate({
              isAvailable: isAvailable,
              onSale: onSale,
              onSalePercentage: salePrecent,
            });
          }}
          //   "isAvailable": true,
          //   "onSale": true,
          //   "onSalePercentage": 0,
        />
      </View>
      <View></View>
    </Dialog.Container>
  );
}
