import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import TitleAndArrow from '../../Components/TitleAndArrow';
import MainCard from '../../Components/MainCard';
import {Images, windowHeight, windowWidth} from '../../Utils/Themes';
import Gallery from './Gallery';
import Location from './Location';
import OpenTime from './OpenTime';

const About = () => (
  <View style={{backgroundColor: '#D5BE2A', flex: 1}}>
    <TitleAndArrow title={'About'} />
    <MainCard size={85}>
      <ScrollView>
        <Image
          style={{
            backgroundColor: 'black',
            borderRadius: 15,
            height: windowHeight * 0.24,
            width: windowWidth * 0.8,
            marginTop: 10,
            alignSelf: 'center',
          }}
          source={Images.Logo}
        />
        <View
          style={{
            width: '90%',
            borderWidth: 0.5,
            marginTop: 20,
            alignSelf: 'center',
          }}
        />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            About Us
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
  </View>
);
export default About;
