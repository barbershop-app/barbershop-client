import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export const MainCard = ({yellow, white, size, children}) => {
  useEffect(() => {
    console.log(yellow);
  }, []);
  return (
    <View
      style={{
        backgroundColor: yellow ? '#D5BE2A' : white ? 'white' : 'white',
        position: 'absolute',
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        bottom: 0,
        height: `${size}%`,
        padding: 10,
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainCard;
