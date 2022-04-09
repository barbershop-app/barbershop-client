import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {windowHeight} from '../../Utils/Themes';
import {HOME} from '../../Utils/RouteNames';
import {clearCartList} from '../../Utils/StaticFunctions';

const OrderPlaced = props => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        clearCartList();
        props.navigation.navigate(HOME);
      }, 2000);
    }, 5000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#D5BE2A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Animatable.View
          animation={loading ? animation_0 : animation_1}
          iterationCount={'infinite'}>
          <Image
            style={{
              width: 60,
              height: 100,
              transform: [{rotate: loading ? '90deg' : '0deg'}],
            }}
            source={{
              uri: 'https://www.pikpng.com/pngl/b/91-919025_barber-shears-png-hair-salon-scissors-png-clipart.png',
            }}
          />
        </Animatable.View>
      </View>
      <Animatable.Text
        animation="swing"
        iterationCount={'infinite'}
        style={{
          color: loading ? 'black' : 'green',
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: 10,
        }}
        direction="alternate">
        {loading ? 'Loading...' : 'Order Placed!'}
      </Animatable.Text>
    </View>
  );
};

const animation_0 = {
  0: {
    opacity: 0.3,
    marginRight: 250,
    marginLeft: 0,
  },
  0.2: {
    opacity: 1,
    marginRight: 0,
    marginLeft: 0,
  },
  0.8: {
    opacity: 1,
    marginRight: 0,
    marginLeft: 0,
  },
  1: {
    opacity: 0,
    marginRight: 0,
    marginLeft: 250,
  },
};
const animation_1 = {
  0: {
    opacity: 0,
    marginTop: 0,
  },
  0.2: {
    opacity: 0.3,
    marginTop: 10,
  },
  0.8: {
    opacity: 0.5,
    marginTop: 5,
  },
  1: {
    opacity: 1,
    marginTop: 0,
  },
};

const styles = StyleSheet.create({});

export default OrderPlaced;
