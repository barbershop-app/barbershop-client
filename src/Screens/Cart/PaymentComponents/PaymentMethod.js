import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import SelectPayment from './SelectPayment';
import CashPaymentComponent from './CashPaymentComponent';
import DebitCardPaymentComponent from './DebitCardPaymentComponent';
import OrderInfo from '../OrderInfo';

const PaymentMethod = props => {
  const data = useSelector(state => state.payment);
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
          marginTop: '5%',
          marginLeft: '5%',
        }}>
        Payment Method
      </Text>
      {data.method === 'debitCard' ? (
        <DebitCardPaymentComponent
          method={data.method}
          digits={data.visaLast4Digits}
          navigation={props.navigation}
        />
      ) : data.method === 'creditCard' ? (
        <DebitCardPaymentComponent
          method={data.method}
          digits={data.visaLast4Digits}
          navigation={props.navigation}
        />
      ) : data.method === 'cash' ? (
        <CashPaymentComponent navigation={props.navigation} />
      ) : (
        <SelectPayment navigation={props.navigation} />
      )}
      <View></View>
    </View>
  );
};

export default PaymentMethod;
