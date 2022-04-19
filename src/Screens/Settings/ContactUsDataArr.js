import {View, Text} from 'react-native';
import React from 'react';
import GrayBigTitle from './GrayBigTitle';
import SmallTitleAndValue from './SmallTitleAndValue';

const ContactUsDataArr = props => {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <View>
        <GrayBigTitle title={'Contact Us'} />
        {props.arr.map(e => (
          <View key={e.title}>
            <SmallTitleAndValue title={e.title} value={e.value} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default ContactUsDataArr;
