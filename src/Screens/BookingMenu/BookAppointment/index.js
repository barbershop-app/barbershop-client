import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import TitleAndArrow from '../../../Components/TitleAndArrow';
import {Images, windowHeight, windowWidth} from '../../../Utils/Themes';
import MainCard from '../../../Components/MainCard';
import LeftCircle from './LeftCircle';
import Line90Width from './Line90Width';
import LogoCenter from './LogoCenter';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import MainButton from '../../../Components/MainButton';
import {ScrollView} from 'react-native-gesture-handler';
import HttpRequest from '../../../config/API/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertOneButton from '../../../Components/AlertOneButton';
import {HOME} from '../../../Utils/RouteNames';
import LinearGradient from 'react-native-linear-gradient';
import {Gray_1, Gray_2, Gray_3, Gray_5} from '../../../Utils/Colors';

const BookAppointment = props => {
  const [leftPlaces, setLeftPlaces] = useState(15);
  const [markedDates, setMarkedDates] = useState({});
  const [dateSelected, setDateSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });

  const getLeftPlaces = async date => {
    setLoading(true);
    const result = await HttpRequest('Appointments/AvailableSlots', 'POST', {
      barberShopId: 0,
      date: date,
    });
    if (result.status === 200) {
      setLeftPlaces(result.data.availableSlots);
      setLoading(false);
    }
  };

  const pickDate = async () => {
    setLoading(true);
    await getLeftPlaces(dateSelected);
    if (leftPlaces > 0) {
      await AsyncStorage.getItem('barbershop').then(async data => {
        const result = await HttpRequest('Appointments/Create', 'POST', {
          barberShopId: 0,
          userId: JSON.parse(data).id,
          date: dateSelected,
        });

        if (result.status === 200) {
          setAlertData({
            title: 'Booked Sucessfully !',
            message:
              'Thanks You for Booking In Our Barber Shop \n Booked on Date: ' +
              dateSelected.slice(0, 10),
            showAlert: true,
            hideButton: true,
            onPressOk: () => props.navigation.navigate(HOME),
          });
        } else {
          setAlertData({
            title: 'Warning',
            message: 'You already have an appointment booked',
            showAlert: true,
          });
        }
      });
    } else {
      setAlertData({
        title: 'Sorry This Day is Full !',
        message: 'Please Try Another Day',
        showAlert: true,
      });
    }
    setLoading(false);
    await getLeftPlaces(dateSelected);
  };

  return (
    <LinearGradient style={{flex: 1}} colors={[Gray_2, Gray_5, Gray_3, Gray_5]}>
      <TitleAndArrow navigation={props.navigation} title={'Book Appointment'} />
      <LogoCenter />
      <MainCard size={68}>
        <ScrollView>
          <LeftCircle animation={loading} leftPlaces={leftPlaces} />
          <Line90Width />
          <View style={{alignSelf: 'center', width: '90%', marginTop: 5}}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
              Select Date
            </Text>
          </View>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Calendar
              minDate={today}
              current={today}
              onDayPress={day => {
                var key = day.dateString;
                var markedDates = {};
                markedDates[key] = {
                  selected: true,
                  marked: true,
                  selectedColor: 'black',
                };
                setMarkedDates(markedDates);
                setDateSelected(day.dateString + 'T00:00:00.000Z');
                getLeftPlaces(day.dateString + 'T00:00:00.000Z');
              }}
              // Collection of dates that have to be marked. Default = {}
              markedDates={markedDates}
            />
            <View style={{marginTop: 15}}>
              <MainButton
                width={100}
                titleColor={'white'}
                color={'black'}
                disabled={loading}
                title={loading ? 'Loading...' : 'Book Now'}
                onPressFunction={() => pickDate()}
              />
            </View>
          </View>
        </ScrollView>
      </MainCard>
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </LinearGradient>
  );
};
export default BookAppointment;
