import {View, Text} from 'react-native';
import React from 'react';

const SmallTitleAndValue = props => {
  return (
    <View>
      <Text style={{fontSize: 13, color: 'black', marginLeft: 5}}>
        {props.title}
      </Text>
      <Text style={{fontSize: 18, color: 'black', marginLeft: 5}}>
        {props.value}
      </Text>
    </View>
  );
};

export default SmallTitleAndValue;
