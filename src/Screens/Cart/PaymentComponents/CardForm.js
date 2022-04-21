import {View, Text} from 'react-native';
import React from 'react';
import MainInputText from '../../../Components/MainInputText';
import {windowWidth} from '../../../Utils/Themes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CardForm = props => {
  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          width: windowWidth * 0.9,
          alignSelf: 'flex-start',
          marginLeft: '10%',
          // borderWidth: 1,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: '4%',
            marginLeft: '2%',
            color: 'black',
            marginBottom: 20,
          }}>
          {props.method === 'creditCard' ? 'Credit Card' : 'Debit Card'}
        </Text>
        <View>
          <MainInputText
            placeHolder={'Card Number'}
            size={80}
            setOnChangeText={props.setCardNumber}
          />
          <View style={{marginTop: 5}}>
            <MainInputText placeHolder={'Name On Card'} size={80} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              width: '80%',
              justifyContent: 'space-between',
            }}>
            <MainInputText placeHolder={'expiry month'} size={49} />
            <MainInputText placeHolder={'expiry Year'} size={49} />
          </View>
          <View
            style={{
              marginTop: 5,
              flexDirection: props.method === 'creditCard' ? 'row' : 'column',
              width: props.method === 'creditCard' ? '80%' : '80%',
              justifyContent: 'space-between',
            }}>
            <MainInputText placeHolder={'CVV'} size={49} />
            {props.method === 'creditCard' ? (
              <MainInputText placeHolder={'payments'} size={49} />
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CardForm;
