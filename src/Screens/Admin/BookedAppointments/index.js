import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import HttpRequest from '../../../config/API/axios';
import {ScrollView} from 'react-native-gesture-handler';

import MainCard from '../../../Components/MainCard';
import TitleAndArrow from '../../../Components/TitleAndArrow';
import AlertOneButton from '../../../Components/AlertOneButton';
import BookedAppointmentCard from './BookedAppointmentCard';
import {Gray_2, Gray_3} from '../../../Utils/Colors';

export default function BookedAppointments(props) {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });
  const deleteAppointment = async id => {
    const result = await HttpRequest(`appointments/delete/${id}`, 'POST', {});
    console.log(result);

    getBookedAppointments();
  };
  const markAsDoneAppointment = async id => {
    const result = await HttpRequest('Appointments​/Update', 'POST', {
      id: id, //! need fix here with hakam
      hasBeenHandeled: true,
    });
    console.log(result);
    getBookedAppointments();
  };

  useEffect(() => {
    getBookedAppointments();
  }, []);
  const getBookedAppointments = async () => {
    const result = await HttpRequest(
      'Appointments/GetTodayAppointments',
      'GET',
      '',
    );
    if (result.status === 200) setAppointments(result.data.bookedAppointments);
    else console.log(result);
  };
  return (
    <View style={{flex: 1, backgroundColor: Gray_2}}>
      <TitleAndArrow
        navigation={props.navigation}
        title={'Edit Booked Appointments'}
      />
      <MainCard size={85} isYellow={false}>
        <View style={{}}>
          <ScrollView>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 25}}>
              {appointments.length > 0 ? '' : 'No Appointment Today'}
            </Text>
            {appointments.length > 0 &&
              appointments.map(e => (
                <BookedAppointmentCard
                  appointment={e}
                  markAsDoneAppointment={markAsDoneAppointment}
                  deleteAppointment={deleteAppointment}
                />
              ))}
          </ScrollView>
        </View>
      </MainCard>
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </View>
  );
}
