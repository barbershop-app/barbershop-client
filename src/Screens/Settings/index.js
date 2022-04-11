import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import TitleAndArrow from '../../Components/TitleAndArrow';
import MainCard from '../../Components/MainCard';
import MainButton from '../../Components/MainButton';
import Line90Width from '../BookingMenu/BookAppointment/Line90Width';
import SmallTitleAndValue from './SmallTitleAndValue';
import GrayBigTitle from './GrayBigTitle';
import TitleAndValueAndButton from './TitleAndValueAndButton';
import ContactUsDataArr from './ContactUsDataArr';

const Settings = props => (
  <View style={{flex: 1}}>
    <TitleAndArrow navigation={props.navigation} title={'Settings'} />
    <MainCard isYellow={true} size={70}>
      <TitleAndValueAndButton
        bigTitle={'Name'}
        value={'Mosaab Abo Rkia'}
        button
        buttonTitle={'Edit'}
        buttonWidth={85}
        buttonHeight={45}
        onPressFunction={() => console.log('edit')}
      />

      <TitleAndValueAndButton
        bigTitle={'Number Phone'}
        value={'+972 50 790 7888'}
      />

      <Line90Width />

      <TitleAndValueAndButton
        bigTitle={'Close Account'}
        value={'Delete your account'}
        button
        padding={5}
        buttonTitle={'close account'}
        buttonWidth={95}
        buttonHeight={40}
        onPressFunction={() => console.log('close account')}
      />

      <Line90Width />
      <ContactUsDataArr
        arr={[
          {title: 'Phone Number', value: '+972 50 790 7888'},
          {title: 'Email Address', value: 'aborkiamosaab@gmail.com'},
        ]}
      />
    </MainCard>
  </View>
);
export default Settings;
