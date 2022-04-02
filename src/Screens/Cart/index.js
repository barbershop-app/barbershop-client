import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import TitleAndArrow from '../../Components/TitleAndArrow';
import MyCartComponent from '../../Components/MyCartComponent';
import PaymentMethod from '../../Components/PaymentMethod';
import OrderInfo from '../../Components/OrderInfo';
import MainButton from '../../Components/MainButton';

const tempData = [
  {
    id: 0,
    categoryId: 0,
    name: 'Perfume You Armani',
    price: 250,
    isAvailable: true,
    onSale: false,
    onSalePercentage: 25,
    imageSource:
      'https://media.gq-magazine.co.uk/photos/6013e45caa1bacc9780a6927/1:1/w_3000,h_3000,c_limit/Emporio%20Armani.png',
    quantity: 1,
  },
  {
    id: 1,
    categoryId: 0,
    name: 'Perfume You Armani',
    price: 250,
    isAvailable: true,
    onSale: true,
    onSalePercentage: 50,
    imageSource:
      'https://media.gq-magazine.co.uk/photos/6013e45caa1bacc9780a6927/1:1/w_3000,h_3000,c_limit/Emporio%20Armani.png',
    quantity: 1,
  },
  {
    id: 2,
    categoryId: 0,
    name: 'Perfume You Armani',
    price: 350,
    isAvailable: true,
    onSale: true,
    onSalePercentage: 25,
    imageSource:
      'https://media.gq-magazine.co.uk/photos/6013e45caa1bacc9780a6927/1:1/w_3000,h_3000,c_limit/Emporio%20Armani.png',
    quantity: 1,
  },
];
const Cart = props => {
  const [total,setTotal] = useState(0);

  const [data, setData] = useState();
  useEffect(() => {
    setData(tempData);
  }, []);

  useEffect(()=>{
    let totalPrice = 0;
    data?.map(e=>{
      e.onSale?
      totalPrice += (
        e.price -
        (e.price / 100) * e.onSalePercentage
      )  * e.quantity
      :
      totalPrice += e.price * e.quantity
      
    })
    setTotal(totalPrice)
  },[data])


  const removeItem =async id => setData(data?.filter(e => e.id !== id))

  const changeQuantity = (id, newQuantity) => setData(data?.map(item => item.id === id ? {...item,quantity: newQuantity}: item ))


  return (
    <View>
      <TitleAndArrow navigation={props.navigation} title="Order Details" />
      <MyCartComponent tempData={data} setData={setData} removeItem={(e)=>removeItem(e)} changeQuantity ={(id, newQuantity)=>changeQuantity(id, newQuantity)}/>
      <PaymentMethod />
      <OrderInfo totalPrice={total} shippingFee={0}/>
      <View style={{marginTop:15}}>
         <MainButton borderRadius={20} fontSize={15} borderWidth={0.5} width={85} height={50} center bold title={`Checkout ($${total})`}/>
      </View>
     
     
    </View>
  );
};

export default Cart;
