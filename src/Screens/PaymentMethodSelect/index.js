import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import TitleAndArrow from '../../Components/TitleAndArrow';
import MainCard from '../../Components/MainCard';
import {useDispatch, useSelector} from 'react-redux';

import MainButton from '../../Components/MainButton';
import MainInputText from '../../Components/MainInputText';
import {windowWidth} from '../../Utils/Themes';
import CardForm from '../Cart/PaymentComponents/CardForm';
import {setMethod} from '../../Redux/Slices/paymentSlice';
import {CART} from '../../Utils/RouteNames';
import PaymentIcon from '../Cart/PaymentIcon';

import CashForm from '../Cart/PaymentComponents/CashForm';

const PaymentMethodSelect = props => {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  const data = useSelector(state => state.dial);
  const dispatch = useDispatch();

  const [paymentArr, setPaymentArr] = useState([
    {
      id: 'cash',
      isSelected: false,
      name: 'Cash',
      imageSource:
        'https://cdn3.iconfinder.com/data/icons/vol-4/128/money-256.png',
    },
    {
      id: 'debitCard',
      isSelected: false,
      name: 'Debit Card',
      imageSource:
        'https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-10-512.png',
    },
    {
      id: 'creditCard',
      isSelected: false,
      name: 'Credit Card',
      imageSource:
        'https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png',
    },
  ]);

  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);

  useEffect(() => {
    getSelectedMethodName();
  }, [paymentArr]);

  const selectMethod = id => {
    setPaymentArr(
      paymentArr?.map(item =>
        item.id === id
          ? {...item, isSelected: !item.isSelected}
          : {...item, isSelected: false},
      ),
    );
  };
  //onClickConfirm
  const handleFunction = () => {
    if (paymentMethod !== null) {
      dispatch(
        setMethod({type: {method: paymentMethod, visaDigits: cardNumber}}),
      );
      props.navigation.navigate(CART);
    }
  };
  //get Selected One
  const getSelectedMethodName = () => {
    let flag = null;
    paymentArr.map(e => {
      if (e.isSelected) flag = e.id;
    });
    setPaymentMethod(flag);
  };
  return (
    <View style={{flex: 1}}>
      <TitleAndArrow navigation={props.navigation} title={'Payment Method'} />
      <MainCard size={80} backgroundColor={SelectedGradientColor[0]}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginTop: '4%',
            marginLeft: '2%',
          }}>
          Select Payment Method
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {paymentArr?.map(item => (
            <PaymentIcon
              key={item.id}
              selectMethod={id => selectMethod(id)}
              item={item}
            />
          ))}
        </View>
        <View
          style={{
            borderWidth: 1,
            width: '95%',
            opacity: 0.3,
            marginTop: 15,
            marginBottom: 15,
            alignSelf: 'center',
          }}
        />
        {paymentMethod === null ? (
          <View style={{flex: 1, alignSelf: 'center', marginTop: '30%'}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Please Select PaymentMethod
            </Text>
            <Text style={{fontSize: 50, textAlign: 'center'}}>...</Text>
          </View>
        ) : paymentMethod === 'cash' ? (
          <CashForm imageSource={paymentArr[0].imageSource} />
        ) : paymentMethod === 'creditCard' ? (
          <CardForm method={'creditCard'} setCardNumber={setCardNumber} />
        ) : paymentMethod === 'debitCard' ? (
          //setOnChangeText
          <CardForm method={'debitCard'} setCardNumber={setCardNumber} />
        ) : (
          <></>
        )}
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
          }}>
          <MainButton
            onPressFunction={handleFunction}
            disabled={paymentMethod === null}
            width={100}
            color={'black'}
            titleColor={'white'}
            title={'Confirm'}
            borderWidth={1}
            borderRadius={15}
            bold
            fontSize={20}
            center
          />
        </View>
      </MainCard>
    </View>
  );
};

export default PaymentMethodSelect;
