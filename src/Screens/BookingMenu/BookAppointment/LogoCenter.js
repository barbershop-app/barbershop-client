import {View, Text, Image} from 'react-native';
import React from 'react';
import {Images, windowHeight, windowWidth} from '../../../Utils/Themes';

const LogoCenter = () => {
  return (
    <View style={{alignSelf: 'center', marginTop: windowHeight * 0.05}}>
      <Image
        style={{width: windowWidth * 0.6, height: windowWidth * 0.35}}
        source={Images.Logo}
      />
    </View>
  );
};

export default LogoCenter;
