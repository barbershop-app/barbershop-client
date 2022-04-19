import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import TitleAndArrow from '../../Components/TitleAndArrow';
import MainCard from '../../Components/MainCard';
import {Images, windowHeight, windowWidth} from '../../Utils/Themes';
import Gallery from './Gallery';
import Location from './Location';
import OpenTime from './OpenTime';
import LogoCenter from '../BookingMenu/BookAppointment/LogoCenter';
import LinearGradient from 'react-native-linear-gradient';
import {Gray_2, Gray_3, Gray_5} from '../../Utils/Colors';

const About = props => (
  <LinearGradient style={{flex: 1}} colors={[Gray_2, Gray_5, Gray_3, Gray_5]}>
    <TitleAndArrow title={'About'} navigation={props.navigation} />
    <LogoCenter />
    <MainCard size={68}>
      <ScrollView>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
            Who Us?
          </Text>
          <Text style={{fontSize: 15, color: 'black'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It
          </Text>
        </View>
        <Gallery />
        <Location />
        <OpenTime />
      </ScrollView>
    </MainCard>
    {/* 
      
     

      Location
      openTime
  
  */}
  </LinearGradient>
);
export default About;
