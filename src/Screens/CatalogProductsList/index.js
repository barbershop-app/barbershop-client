import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CatalogProductCard from './CatalogProductCard';
import TitleAndArrow from '../../Components/TitleAndArrow';
import HttpRequest from '../../config/API/axios';
import {useIsFocused} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {gradientColors} from '../../Utils/Colors';
import {windowHeight, windowWidth} from '../../Utils/Themes';
import LoadingDots from '../../Components/LoadingDots';
import Line90Width from '../BookingMenu/BookAppointment/Line90Width';

const CatalogProductsList = props => {
  const isFocused = useIsFocused();
  const params = props.route.params;
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    HttpCall();
  }, [isFocused]);

  const HttpCall = async () => {
    const result = await HttpRequest(
      `Market/GetAllProductsByCategoryId/${params.categoryId}`,
      'GET',
      '',
    );

    if (result.status === 200) {
      setProducts(result.data.products);
      setCategoryId(result.data.categoryId);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else props.navigation.goBack();
  };
  const renderItem = ({item, index}) => (
    <CatalogProductCard
      navigation={props.navigation}
      key={index}
      index={index}
      item={item}
      categoryId={categoryId}
    />
  );
  // console.log(categoryId);
  return (
    <LinearGradient style={{flex: 1}} colors={gradientColors}>
      <TitleAndArrow
        white
        navigation={props.navigation}
        title={params.catalogName}
      />
      <View style={{borderBottomWidth: 1, borderColor: 'white'}} />
      {products.length <= 0 ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: windowHeight * 0.4,
          }}>
          <Text>Empty</Text>
        </View>
      ) : (
        <></>
      )}

      {loading ? (
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flex: 0.9,
          }}>
          <LoadingDots />
        </View>
      ) : (
        <FlatList
          style={{
            alignSelf: 'center',
            width: windowWidth * 0.95,
          }}
          data={products}
          key={'_'}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      )}

      {/* <ScrollView
        style={{
          borderWidth: 1,
          marginTop: '5%',
          width: windowWidth * 0.99,
          alignSelf: 'center',
          flexWrap: 'wrap',
        }}>
        {products.length > 0 &&
          products?.map((item, index) => (
            <CatalogProductCard
              navigation={props.navigation}
              key={index}
              index={index}
              item={item}
              categoryId={categoryId}
            />
          ))}
      </ScrollView> */}
    </LinearGradient>
  );
};
export default CatalogProductsList;
