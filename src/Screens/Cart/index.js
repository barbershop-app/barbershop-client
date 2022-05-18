import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import TitleAndArrow from '../../Components/TitleAndArrow';
import MyCartComponent from './MyCartComponent';
import OrderInfo from './OrderInfo';
import MainButton from '../../Components/MainButton';
import {
  changeQuantityAsyncStorage,
  getCartList,
  removeCartItem,
} from '../../Utils/StaticFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CART_ORDER_PLACED} from '../../Utils/RouteNames';
import {useDispatch, useSelector} from 'react-redux';
import {
  RemoveFromCart,
  ResetCart,
  Update,
  UpdateQuantity,
} from '../../Redux/Slices/cartSlice';
import LinearGradient from 'react-native-linear-gradient';
import PaymentMethod from './PaymentComponents/PaymentMethod';

const Cart = props => {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  const [total, setTotal] = useState(0); //price
  // const [data, setData] = useState();
  const dispatch = useDispatch();
  const data = useSelector(data => data.cart.items);

  useEffect(() => {
    // total
    let totalPrice = 0;
    data?.map(e => {
      e.onSale
        ? (totalPrice +=
            (e.price - (e.price / 100) * e.onSalePercentage) * e.quantity)
        : (totalPrice += e.price * e.quantity);
    });
    setTotal(totalPrice);
  }, [data]);

  const removeItem = id => {
    dispatch(RemoveFromCart({id}));
    removeCartItem(id);
  };

  const changeQuantity = (id, newQuantity) => {
    dispatch(UpdateQuantity({id, newQuantity}));
    changeQuantityAsyncStorage(id, newQuantity);
  };

  return (
    <LinearGradient
      colors={['white', 'white', SelectedGradientColor[1], SelectedGradientColor[0]]}
      style={{flex: 1}}>
      <TitleAndArrow navigation={props.navigation} title="Order Details" />
      <MyCartComponent
        tempData={data}
        setData={e => dispatch(Update(e))}
        removeItem={id => removeItem(id)}
        changeQuantity={(id, newQuantity) => changeQuantity(id, newQuantity)}
      />
      <PaymentMethod navigation={props.navigation} />
      <OrderInfo totalPrice={total} shippingFee={0} />
      <View style={{marginTop: 15}}>
        <MainButton
          disabled={total === 0}
          titleColor={'black'}
          color={'white'}
          borderRadius={20}
          fontSize={15}
          borderWidth={0.5}
          width={85}
          height={50}
          center
          bold
          title={`Checkout ($${total.toFixed(2)})`}
          onPressFunction={() => {
            dispatch(ResetCart());
            props.navigation.navigate(CART_ORDER_PLACED);
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default Cart;
