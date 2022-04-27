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
          maxWidth: '100%',
        }}
        key={props.appointment.id}>
        <View style={{maxWidth: '70%', marginLeft: 10}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
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
            style={{alignSelf: 'center'}}
          />
          <Text style={{fontSize: 10, alignSelf: 'center'}}>
            Cancel Appointment
          </Text>
        </View>
        <View>
          <Icon
            name={
              props.appointment.hasBeenHandeled
                ? 'checkbox'
                : 'checkbox-outline'
            }
            size={50}
            color="black"
            onPress={() =>
              props.markAsDoneAppointment(
                props.appointment.id,
                props.appointment.hasBeenHandeled,
              )
            }
            // onPress={() => consolprops.appointment.log(props.appointment.id)}
            style={{alignSelf: 'center'}}
          />
          <Text style={{fontSize: 10, alignSelf: 'center'}}>
            Update Appointment
          </Text>
        </View>
      </View>
      <Line90Width />
    </View>
  );
};

export default BookedAppointmentCard;
