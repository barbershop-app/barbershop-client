import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBarHomePage from '../../Components/NavBarHomePage';
import WelcomeWord from '../../Components/WelcomeWord';
import DualButton from '../../Components/DualButton';
import {windowWidth} from '../../Utils/Themes';
import CategoriesList from '../../Components/CategoriesList';
import SpecialOffersList from '../../Components/SpecialOffersList';
import {BOOK_APPOINTMENT, CART, MY_APPOINTMENTS} from '../../Utils/RouteNames';
import {useDispatch, useSelector} from 'react-redux';
import HttpRequest from '../../config/API/axios';
import {setUser} from '../../Redux/Slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {Gray_1, Gray_2, Gray_3, Gray_5} from '../../Utils/Colors';

const TextBigBold = ({children}) => (
  <Text
    style={{
      alignSelf: 'center',
      fontSize: 35,
      marginTop: 10,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    }}>
    {children}
  </Text>
);

const Home = props => {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.firstName === null || userData.firstName === undefined)
      UpdateUserData();
  }, []);

  const UpdateUserData = async () => {
    await AsyncStorage.getItem('barbershop').then(async data => {
      let jsonData = JSON.parse(data);
      const result = await HttpRequest(
        `Users/GetById/${jsonData.id}`,
        'GET',
        '',
      );
      if (result.status === 200) {
        let user = {
          ...result.data,
          id: jsonData.id,
          token: jsonData.token,
          isAdmin: jsonData.isAdmin,
        };
        dispatch(setUser(user));
        AsyncStorage.setItem('barbershop', JSON.stringify(user));
      } else console.log(result);
    });
  };

  return (
    <LinearGradient style={{flex: 1}} colors={[Gray_1, Gray_2, Gray_3, Gray_5]}>
      <ScrollView>
        <NavBarHomePage
          onPressMenu={() => {
            props.navigation.openDrawer();
          }}
          onPressCart={() => {
            props.navigation.navigate(CART);
          }}
        />
        <WelcomeWord name={userData.firstName} />

        <TextBigBold>Let's get a Hair Cut</TextBigBold>

        <Text
          style={{
            alignSelf: 'center',
            fontSize: 17,
            fontWeight: 'bold',
            marginTop: 10,
            color: Gray_5,
          }}>
          Haircutting is an art
        </Text>

        <DualButton
          iconOne="calendar"
          iconTwo="calendar-check-o"
          textIconOne="Book Appointment"
          textIconTwo="My Appointment"
          onPressIconOne={() => {
            props.navigation.navigate(BOOK_APPOINTMENT);
          }}
          onPressIconTwo={() => {
            props.navigation.navigate(MY_APPOINTMENTS);
          }}
        />

        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            width: windowWidth * 0.9,
            alignSelf: 'center',
            marginTop: 15,
            marginBottom: 15,
          }}
        />
        <TextBigBold>Select Your {'\n'} Favorite Products</TextBigBold>
        <CategoriesList navigation={props.navigation} />
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            width: windowWidth * 0.9,
            alignSelf: 'center',
            marginTop: 15,
          }}
        />
        <SpecialOffersList navigation={props.navigation} />
      </ScrollView>
    </LinearGradient>
  );
};
export default Home;
