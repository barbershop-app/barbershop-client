import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Line90Width from '../../BookingMenu/BookAppointment/Line90Width';

const BookedAppointmentCard = props => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
        key={props.appointment.id}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: 'black',
            }}>
            {props.appointment.user.firstName +
              ' ' +
              props.appointment.user.lastName}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
            }}>
            {props.appointment.user.phoneNumber}
          </Text>
        </View>
        <View>
          <Icon
            name="remove-circle-outline"
            size={50}
            color="black"
            onPress={() => {
              props.deleteAppointment(props.appointment.id);
            }}
            style={{}}
          />
        </View>
        <View>
          {props.appointment.hasBeenHandeled ? (
            <Icon
              name="ios-checkmark-circle-outline"
              size={50}
              color="green"
              // onPress={() => consolprops.appointment.log(props.appointment.id)}
              style={{}}
            />
          ) : (
            <Icon
              name="ios-checkmark-circle-outline"
              size={50}
              color="black"
              onPress={() => props.markAsDoneAppointment(props.appointment.id)}
              style={{}}
            />
          )}
        </View>
      </View>
      <Line90Width />
    </View>
  );
};

export default BookedAppointmentCard;
