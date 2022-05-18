import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import HttpRequest from '../../../config/API/axios';
import {ScrollView} from 'react-native-gesture-handler';
import MainCard from '../../../Components/MainCard';
import TitleAndArrow from '../../../Components/TitleAndArrow';
import AlertOneButton from '../../../Components/AlertOneButton';
import BookedAppointmentCard from './BookedAppointmentCard';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused} from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function BookedAppointments(props) {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  const isFocused = useIsFocused();
  const [appointments, setAppointments] = useState([]);
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });

  useEffect(() => {
    getBookedAppointments();
  }, [isFocused]);

  const deleteAppointment = async id => {
    console.log(id);
    const result = await HttpRequest(`Appointments/Delete/${id}`, 'POST', {});
    if (result.status === 200) {
      getBookedAppointments();
    } else console.log(result);
  };
  const markAsDoneAppointment = async (id, done) => {
    console.log(id, done);
    const result = await HttpRequest('Appointments/update', 'POST', {
      id: id,
      hasBeenHandeled: !done,
    });
    getBookedAppointments();
  };

  const getBookedAppointments = async () => {
    const result = await HttpRequest(
      'Appointments/GetTodayAppointments',
      'GET',
      '',
    );
    // console.log(result);
    if (result.status === 200) setAppointments(result.data.bookedAppointments);
    else {
      console.log('result');
      setAppointments([]);
    }
  };
  return (
    <LinearGradient style={{flex: 1}} colors={SelectedGradientColor}>
      <TitleAndArrow
        white
        navigation={props.navigation}
        title={'Edit Booked Appointments'}
      />
      <MainCard size={85} isYellow={false}>
        <View style={{alignSelf: 'center', width: '90%'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              fontWeight: 'bold',
              borderBottomWidth: 1,
              textAlign: 'center',
            }}>
            Today Appointments
          </Text>
        </View>
        <View>
          <ScrollView>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 25}}>
              {appointments.length > 0 ? '' : 'No Appointment Today'}
            </Text>

            {appointments.length > 0 &&
              appointments.map((e, index) => (
                <BookedAppointmentCard
                  key={index}
                  appointment={e}
                  markAsDoneAppointment={markAsDoneAppointment}
                  deleteAppointment={deleteAppointment}
                />
              ))}
          </ScrollView>
        </View>
      </MainCard>
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </LinearGradient>
  );
}
