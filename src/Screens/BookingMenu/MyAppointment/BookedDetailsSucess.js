import {View, Text} from 'react-native';
import React from 'react';
import Line90Width from '../BookAppointment/Line90Width';
import LeftCircle from '../BookAppointment/LeftCircle';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function BookedDetailsSucess(props) {
  return (
    <View>
      <View>
        <View style={{marginTop: 50}}>
          <LeftCircle leftPlaces={props.leftPlaces} />
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Before you
          </Text>
        </View>
        <Line90Width />
        <View>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              alignSelf: 'center',
              fontWeight: 'bold',
              marginTop: 15,
            }}>
            Date
          </Text>
          <Text style={{alignSelf: 'center', fontSize: 35}}>
            {props.dataDate.slice(0, 10)}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          width: '100%',
          justifyContent: 'flex-end',
          height: '40%',
        }}>
        <TouchableOpacity
          onPress={
            props.onPressCancelAppointment === undefined
              ? console.log('nothing')
              : props.onPressCancelAppointment
          }
          style={{
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>Cancel This Appoinment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
