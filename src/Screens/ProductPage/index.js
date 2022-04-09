import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import React from 'react';
import NavProductPage from '../../Components/NavProductPage';
import {windowWidth} from '../../Utils/Themes';
import MainCard from '../../Components/MainCard';
import SilmilarThisList from '../../Components/SilmilarThisList';
import NameAndPrice from '../../Components/NameAndPrice';
import MainButton from '../../Components/MainButton';
import {AddToCartAsync} from '../../Utils/StaticFunctions';
import {useDispatch} from 'react-redux';
import {AddToCart} from '../../Redux/Slices/cartSlice';

const ProductPage = props => {
  const params = props.route.params;
  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: '#D5BE2A', flex: 1}}>
      <NavProductPage navigation={props.navigation} />
      <View>
        <Image
          style={[
            Platform.OS === 'ios'
              ? styles.boxWithShadowIOS
              : styles.boxWithShadowANDROID,
            {
              width: windowWidth * 0.7,
              height: windowWidth * 0.7,
              alignSelf: 'center',
              borderRadius: 25,
            },
          ]}
          source={{
            uri: 'https://media.gq-magazine.co.uk/photos/6013e45caa1bacc9780a6927/1:1/w_3000,h_3000,c_limit/Emporio%20Armani.png',
          }}
        />
      </View>
      <MainCard size={60}>
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
            marginTop: '6%',
            height: '30%',
            fontWeight: 'bold',
            opacity: 0.7,
            width: '95%',
            color: '#000',
          }}>
          Emporio Armani - Stronger With You Only is a new perfume by Giorgio
          Armani for men and was released in 2022.{'\n'} The scent is
          fresh-sweet. It is being marketed by L'Oréal.
        </Text>
        <SilmilarThisList catagoryId={params.categoryId} />
        <View style={{width: '100%', height: '18%'}}>
          <MainButton
            onPressFunction={() => {
              AddToCartAsync(params);
              dispatch(AddToCart(params));
            }}
            height={'80%'}
            width={90}
            title={'+ Add To Cart'}
            fontSize={18}
            borderRadius={16}
            borderWidth={1}
            textCenter
            bold
            center
            shadow
          />
        </View>
      </MainCard>
    </View>
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
