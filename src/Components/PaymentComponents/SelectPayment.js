import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {CART_SELECT_PAYMENT} from '../../Utils/RouteNames';
const SelectPayment = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(CART_SELECT_PAYMENT)}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
        width: '95%',
        alignSelf: 'center',
      }}>
      <View style={{borderWidth: 1, borderRadius: 15, padding: 5}}>
        <Image
          style={{width: 35, height: 35}}
          source={{
            uri: 'https://img2.arabpng.com/20180419/wsw/kisspng-payment-gateway-credit-card-computer-icons-point-o-automotive-industry-business-card-5ad93c4a689256.4385955015241861864283.jpg',
          }}
        />
      </View>
      <Text style={{alignSelf: 'center', fontSize: 15}}>
        Please Select Payment Method
      </Text>
      <Icon
        name="right"
        size={30}
        color="black"
        style={{alignSelf: 'center'}}
      />
    </TouchableOpacity>
  );
};

export default SelectPayment;
