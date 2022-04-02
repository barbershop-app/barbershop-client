import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBarHomePage from '../../Components/NavBarHomePage';
import WelcomeWord from '../../Components/WelcomeWord';
import DualButton from '../../Components/DualButton';
import {windowWidth} from '../../Utils/Themes';
import CategoriesList from '../../Components/CategoriesList';
import SpecialOffersList from '../../Components/SpecialOffersList';
import {CART} from '../../Utils/RouteNames';

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
      <WelcomeWord name="Mosaab" />

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
          console.log('Book Appointment');
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
      {/* 
    <Search state="useState"/> // ? I Dont Know If Add It Or Not
   
   
   */}
    </ScrollView>
  );
};
export default Home;
