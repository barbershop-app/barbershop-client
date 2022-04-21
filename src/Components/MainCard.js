import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export const MainCard = ({backgroundColor, isYellow, size, children}) => {
  //! size
  return (
    <View
      style={{
        backgroundColor: backgroundColor
          ? backgroundColor
          : isYellow
          ? '#D5BE2A'
          : 'white',
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
