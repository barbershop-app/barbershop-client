import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Square({disabled, value, handleOnClick}) {
  return (
    <View style={{width: '33%'}}>
      {value === 'icon' ? (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => handleOnClick(value)}>
          <Image
            style={{
              width: 25,
              height: 25,
              alignSelf: 'center',
              marginRight: '26%',
              marginTop: '20%',
            }}
            source={require('../../Assets/Images/icons/delete.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => handleOnClick(value)}
          style={{width: '80%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              margin: 15,
              color: '#505050',
            }}>
            {value}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
