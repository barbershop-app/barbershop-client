import {View, Text} from 'react-native';
import React from 'react';
import {windowHeight} from '../Utils/Themes';

export default function TermsAndPolicy() {
  return (
    <View
      style={{
        marginTop: 10,
        alignSelf: 'center',
      }}>
      <CustomText
        text={'By Creating Passcode you agree with our'}
        color={'#505050'}
      />
      <View style={{width: '80%', flexDirection: 'row'}}>
        <CustomText text={' Terms & Conditions'} color={'blue'} />
        <CustomText text={' and'} color={'#505050'} />
        <CustomText text={' Privacy Policy'} color={'blue'} />
      </View>
    </View>
  );
}

const CustomText = ({text, color}) => (
  <Text style={{color: color, fontSize: 10}}> {text}</Text>
);
