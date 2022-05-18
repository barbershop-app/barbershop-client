import {View, Text, Image} from 'react-native';
import React from 'react';
import MainButton from '../../Components/MainButton';
import {Images, windowHeight, windowWidth} from '../../Utils/Themes';
import {NavigationContainer} from '@react-navigation/native';
import {AUTH} from '../../Utils/RouteNames';
import {useDispatch, useSelector} from 'react-redux';
import {resetData} from '../../Redux/Slices/dialSlice';
import LinearGradient from 'react-native-linear-gradient';


export default function Intro({navigation}) {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  const dispatch = useDispatch();
  return (
    <LinearGradient style={{flex: 1}} colors={SelectedGradientColor}>
      <Image
        style={{
          height: windowHeight * 0.4,
          width: windowWidth * 0.7,
          marginTop: 50,
          alignSelf: 'center',
        }}
        source={Images.BarberFrame}
      />
      <View
        style={{
          width: windowWidth * 0.9,

          height: windowHeight * 0.125,
          alignSelf: 'center',
          marginTop: windowHeight * 0.05,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            opacity: 0.9,
          }}>
          Book Your Schedule With Our Talent Barber.
        </Text>
      </View>
      <View
        style={{
          width: windowWidth * 0.9,

          height: windowHeight * 0.2,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            opacity: 0.9,
          }}>
          The person who cuts your hair isn't just some random guy or gal, they
          are a highly trained artist in the truest sense. The art of barbering
          involves how one cuts, shaves and styles hair, as well as how they
          interact with and get to know their client.
        </Text>
      </View>
      <View
        style={{
          width: windowWidth * 0.9,

          height: windowHeight * 0.125,
          alignSelf: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <MainButton
          onPressFunction={() => {
            navigation.navigate(AUTH);
            dispatch(resetData());
          }}
          width={60}
          title={'Get Started'}
          fontSize={18}
          color={'black'}
          titleColor={'white'}
          center
          shadow
          bold
        />
      </View>
    </LinearGradient>
  );
}
