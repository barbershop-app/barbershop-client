import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavProductPage from './NavProductPage';
import {windowWidth} from '../../Utils/Themes';
import MainCard from '../../Components/MainCard';
import SilmilarThisList from './SilmilarThisList';
import NameAndPrice from './NameAndPrice';
import MainButton from '../../Components/MainButton';
import {AddToCartAsync} from '../../Utils/StaticFunctions';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCart} from '../../Redux/Slices/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';


const ProductPage = props => {
  const params = props.route.params;
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  const dispatch = useDispatch();
  const [found, setFound] = useState(false);
  useEffect(() => {
    checkIfInCart();
  }, [params]);

  const checkIfInCart = async () =>
    await AsyncStorage.getItem('cart-list').then(data => {
      let JsonData = JSON.parse(data);
      if (JsonData?.findIndex(e => e.id === params.id) === undefined)
        setFound(undefined);
      else if (JsonData?.findIndex(e => e.id === params.id) > -1)
        setFound(true);
      else setFound(false);
    });

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        'white',
        SelectedGradientColor[1],
        SelectedGradientColor[0],
        SelectedGradientColor[1],
      ]}>
      <NavProductPage navigation={props.navigation} />
      <View>
        <Image
          style={[
            {
              resizeMode:'contain',
              width: windowWidth * 0.6,
              height: windowWidth * 0.6,
              alignSelf: 'center',
              borderRadius: 25,
            },
          ]}
          source={{
            uri: params.imageSource,
          }}
        />
      </View>
      <MainCard size={58}>
        <View
          style={{
            width: '13%',
            borderWidth: 2,
            opacity: 0.16,
            alignSelf: 'center',
            borderRadius: 15,
          }}
        />
        <NameAndPrice data={params} />
        <Text
          style={{
            fontSize: 18,
            marginTop: '3%',
            height: '25%',
            fontWeight: 'bold',
            opacity: 0.7,
            width: '95%',
            color: '#000',
          }}>
          {params.description === undefined
            ? `
Lorem Ipsum is simply dummy text of the
 printing and typesetting industry. Lorem
 Ipsum has been the industrys standard
 dummy text ever since the 1500s`
            : params.description}
        </Text>
        <SilmilarThisList
          categoryId={params.categoryId}
          navigation={props.navigation}
        />
        <View style={{width: '100%', height: '18%'}}>
          <MainButton
            color={
              found === undefined
                ? 'black'
                : found
                ? SelectedGradientColor[0]
                : 'black'
            }
            onPressFunction={async () => {
              AddToCartAsync(params);
              dispatch(AddToCart(params));
              setFound(true);
            }}
            height={'80%'}
            width={90}
            titleColor={
              found === undefined ? 'white' : found ? 'black' : 'white'
            }
            title={
              found === undefined
                ? '+ Add To Cart'
                : found
                ? 'Already In Cart'
                : '+ Add To Cart'
            }
            fontSize={18}
            disabled={found}
            borderRadius={16}
            borderWidth={1}
            textCenter
            bold
            center
            shadow
          />
        </View>
      </MainCard>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  boxWithShadowANDROID: {
    elevation: 5,
    shadowColor: 'black',
  },
  boxWithShadowIOS: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
});
export default ProductPage;
