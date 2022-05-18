import { View, Text, ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'
import  {
    gradientColors_1,
    gradientColors_2,
    gradientColors_3,
    gradientColors_4
} from '../../Utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import { windowHeight, windowWidth } from '../../Utils/Themes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AUTH, SPLASH } from '../../Utils/RouteNames'
import { useSelector } from 'react-redux'
export default function GradientColorselector({navigation}) {
    const gradients = [
        
            gradientColors_1,
            gradientColors_2,
            gradientColors_3,
            gradientColors_4
    ]
    const SelectedGradientColor = useSelector(state => state.app.colorNumber);
    const setGradientColor=(color)=>{
        console.log(color)
        AsyncStorage.setItem('selectedGradientColor',color).then(
            data=>{
            console.log(data)
            navigation.navigate(SPLASH)
        }
        )
    }

  return (
    <LinearGradient style={{flex:1}}  colors={SelectedGradientColor}>
      <Text style={{alignSelf:'center',color:'white',fontWeight:'bold',fontSize:20,marginTop:20,textDecorationLine:'underline'}}>Select Gradient Color</Text>
    <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',marginTop:'5%'}}>
        {gradients.map((color,index)=>
         <TouchableOpacity key={color} style={{ width:windowWidth*0.4,height:windowHeight*0.4,margin:5}} 
         onPress={() =>setGradientColor(String(color))}
         >
            <LinearGradient
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width:'100%',height:'100%',borderWidth:1,borderRadius:15
            }}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={color}>
                        
                <View style={{width:'90%'}}>
                    <Text style={{alignSelf:'center',fontWeight:'bold',color:'white'}}>Choose Me</Text>
                </View>
        </LinearGradient>
        </TouchableOpacity>
        )}
        </View>
    </LinearGradient>
  )
}