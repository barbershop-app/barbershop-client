import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import TitleAndArrow from '../../../Components/TitleAndArrow';
import MainCard from '../../../Components/MainCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HttpRequest from '../../../config/API/axios';
import AlertOneButton from '../../../Components/AlertOneButton';
import {BOOK_APPOINTMENT, HOME} from '../../../Utils/RouteNames';
import BookedDetailsSucess from './BookedDetailsSucess';
import MainButton from '../../../Components/MainButton';
import {useIsFocused} from '@react-navigation/native';
import {gradientColors} from '../../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import LogoCenter from '../BookAppointment/LogoCenter';
import LoadingDots from '../../../Components/LoadingDots';

const MyAppointment = props => {
  const isFocused = useIsFocused();
  const [booked, setBooked] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [alertData, setAlertData] = useState({
    title: '',
    message: '',
    showAlert: false,
  });
  useEffect(() => {
    HttpCall();
  }, [isFocused]);

  const HttpCall = async () => {
    setLoading(true);
    await AsyncStorage.getItem('barbershop').then(async data => {
      const jsonData = JSON.parse(data);
      const result = await HttpRequest(
        `appointments/GetBookedAppointment/${jsonData.id}`,
      );
      if (result.status === 200) {
        setData(result.data);
        setBooked(true);
        setLoading(false);
      } else setLoading(false);
    });
  };
  const DeleteAppointment = async () => {
    setLoading(true);
    const result = await HttpRequest(
      `appointments/delete/${data.id}`,
      'POST',
      {},
    );
    console.log(result.data);
    if (result.status === 200) {
      setBooked(false);
      setData({});

      setAlertData({
        title: 'Sucessfully',
        message: 'Sucessfully Deleted Appointment',
        showAlert: true,
        onPressOk: () => props.navigation.navigate(HOME),
      });
    } else {
      setAlertData({
        title: 'Failed',
        message: 'Failed To Deleted Appointment',
        showAlert: true,
      });
    }
  };
  return (
    <LinearGradient style={{flex: 1}} colors={gradientColors}>
      <TitleAndArrow
        white
        navigation={props.navigation}
        title={'My Appointment'}
      />
      <LogoCenter />
      <MainCard isYellow={false} size={67}>
        <Text
          style={{
            fontSize: 35,
            color: 'black',
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          Booked Details
        </Text>
        {loading ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 0.8,
            }}>
            <LoadingDots />
          </View>
        ) : (
          <>
            {booked ? (
              <BookedDetailsSucess
                leftPlaces={data.numberInQueue}
                dataDate={data.date}
                onPressCancelAppointment={() => DeleteAppointment()}
              />
            ) : (
              <View
                style={{
                  width: '100%',
                  height: '90%',
                  justifyContent: 'center',
                }}>
                <MainButton
                  borderWidth={1}
                  center
                  width={80}
                  bold
                  title={'Book an Appointment'}
                  titleColor={'white'}
                  color={'black'}
                  onPressFunction={() =>
                    props.navigation.navigate(BOOK_APPOINTMENT)
                  }
                />
              </View>
            )}
          </>
        )}
      </MainCard>
      <AlertOneButton alertData={alertData} setAlertData={setAlertData} />
    </LinearGradient>
  );
};
export default MyAppointment;
