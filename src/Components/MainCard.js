import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export const MainCard = ({isYellow, size, children}) => {
  return (
    <View
      style={{
        backgroundColor: isYellow ? '#D5BE2A' : 'white',
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
