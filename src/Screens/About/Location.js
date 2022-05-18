import {View, Text,Linking, Button, TouchableOpacity} from 'react-native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native-animatable';
import { useSelector } from 'react-redux';

const Location = () => {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  const supportedURL = "https://goo.gl/maps/6yXZAvECanEqXEXL8";

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [supportedURL]);

  return (
    <View style={{width: '90%', alignSelf: 'center',height:200,marginBottom:50}}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Location
      </Text>
      <TouchableOpacity style={{width:'90%',alignSelf:'center',marginBottom:15,borderWidth:1,borderRadius:15}} onPress={handlePress}>

      <Image     style={{width:'100%',height:"100%",borderRadius:15}}  source={require('../../Assets/Images/Locations/mapOfBarberShop.jpg')} />
      </TouchableOpacity>
      <Icon.Button
    name="navigate-circle-sharp"
    backgroundColor={SelectedGradientColor[0]}
    onPress={handlePress}
  >
    navigate to barbershop
  </Icon.Button>
    </View>
  );
};

export default Location;
