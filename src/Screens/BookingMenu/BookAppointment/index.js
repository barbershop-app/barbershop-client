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

const BookAppointment = props => {
  const [leftPlaces, setLeftPlaces] = useState(15);
  const [markedDates, setMarkedDates] = useState({});
  const [dateSelected, setDateSelected] = useState(null);
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });

  const getLeftPlaces = async date => {
    const result = await HttpRequest('Appointments/AvailableSlots', 'POST', {
      barberShopId: 0,
      date: date,
    });
    console.log(result.data.availableSlots);
    setLeftPlaces(result.data.availableSlots);
  };

  const pickDate = async () => {
    await getLeftPlaces(dateSelected);
    if (leftPlaces > 0) {
      await AsyncStorage.getItem('barbershop').then(async data => {
        const result = await HttpRequest('Appointments/Create', 'POST', {
          barberShopId: 0,
          userId: JSON.parse(data).id,
          date: dateSelected,
        });
        console.log(result);
        // if(result.status === 400){
        //   //!alert sucessfully
        // } else
        if (result.status === 200) {
          //!alert sucessfully
        } else {
          setAlertData({
            title: 'Something Went Wrong!',
            message: 'Please Try Again',
            showAlert: true,
          });
        }
      });
    }
  };

  return (
    <View style={{backgroundColor: '#D5BE2A', flex: 1}}>
      <TitleAndArrow navigation={props.navigation} title={'Book Appointment'} />
      <LogoCenter />
      <MainCard size={68}>
        <ScrollView>
          <LeftCircle leftPlaces={leftPlaces} />
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
                  selectedColor: '#D5BE2A',
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
                title={'Book Now'}
                onPressFunction={() => pickDate()}
              />
            </View>
          </View>
        </ScrollView>
      </MainCard>
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </View>
  );
};
export default BookAppointment;
