import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBarHomePage from '../../Components/NavBarHomePage';
import WelcomeWord from '../../Components/WelcomeWord';
import DualButton from '../../Components/DualButton';
import {windowWidth} from '../../Utils/Themes';
import CategoriesList from '../../Components/CategoriesList';
import SpecialOffersList from '../../Components/SpecialOffersList';
import {BOOK_APPOINTMENT, CART} from '../../Utils/RouteNames';
import {CART} from '../../Utils/RouteNames';
import {useDispatch, useSelector} from 'react-redux';
import HttpRequest from '../../config/API/axios';
import {setUser} from '../../Redux/Slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TextBigBold = ({children}) => (
  <Text
    style={{
      alignSelf: 'center',
      fontSize: 35,
      marginTop: 10,
      color: 'black',
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
    if (userData.firstName === null) UpdateUserData();
  }, []);

  const UpdateUserData = async () => {
    const result = await HttpRequest(`Users/GetById/${userData.id}`, 'GET', '');
    if (result.status === 200) {
      let user = {
        ...result.data,
        id: userData.id,
        token: userData.token,
        isAdmin: userData.isAdmin,
      };
      dispatch(setUser(user));
      AsyncStorage.setItem('barbershop', JSON.stringify(user));
    } else console.log(result);
    AsyncStorage.getItem('barbershop').then(data => console.log(data));
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
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
          console.log('My Appointment');
        }}
      />

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: windowWidth * 0.9,
          alignSelf: 'center',
          marginTop: 15,
          marginBottom: 15,
        }}
      />
      <TextBigBold>Select Your {'\n'} Favorite Products</TextBigBold>
      <CategoriesList navigation={props.navigation} />
      <SpecialOffersList navigation={props.navigation} />
    </ScrollView>
  );
};
export default Home;
