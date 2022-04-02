import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const CashPaymentComponent = () => {
  return (
    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-around',marginTop:"5%",width:"95%",alignSelf:'center'}}>
          <View style={{borderWidth:1,borderRadius:15,padding:5}}>
          <Image style={{width:35,height:35}} source={{uri:"https://cdn.icon-icons.com/icons2/403/PNG/512/cash_40532.png"}} />
          </View>
          <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'black'}}>
          Cash Method 
        </Text>
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

export default CashPaymentComponent