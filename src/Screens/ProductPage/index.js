import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import React, {useEffect} from 'react';
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
  useEffect(() => console.log('product page ' + params.catagoryId), []);
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
            height: '33%',
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
          catagoryId={params.catagoryId}
          navigation={props.navigation}
        />
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
