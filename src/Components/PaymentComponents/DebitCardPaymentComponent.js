import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const DebitCardPaymentComponent = (props) => {
  return (
    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginTop:"5%",width:"90%",alignSelf:'center'}}>
    <View style={{flexDirection:'row'}}>
    <View style={{borderWidth:1,borderRadius:15,padding:5,marginRight:15}}>

         <Image style={{width:35,height:35}} source={
             {
                 uri:props.method==="creditCard"?
                 "https://thumbs.dreamstime.com/z/illustration-vector-graphic-credit-card-icon-flat-design-bank-isolated-white-background-clip-art-eps-216436378.jpg"
                :
                "https://cdn.iconscout.com/icon/free/png-256/credit-card-1795347-1522706.png"
                }} />
    </View>
    <View style={{flexDirection:'column',alignSelf:'flex-start'}}>    
    <Text style={{alignSelf:'flex-start',fontSize:20,fontWeight:'bold',color:'black'}}>
   {props.method==="creditCard"?"Credit Card":"Debit Card"} 
  </Text>  
    
  <Text style={{alignSelf:'flex-start',fontSize:15,fontWeight:'bold'}}>
  ••••-••••-••••-{props.digits}
  </Text>
    </View>
       
    </View>
    
  <Icon
    name="right"
    size={30}
    color="black"
    onPress={() => props.navigation.navigate('someplace')}
    style={{alignSelf:'center'}}
  />
  </TouchableOpacity>
  )
}

export default DebitCardPaymentComponent