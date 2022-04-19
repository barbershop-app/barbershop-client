import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CatalogProductCard from '../../Components/CatalogProductCard';
import TitleAndArrow from '../../Components/TitleAndArrow';
import HttpRequest from '../../config/API/axios';
import {useIsFocused} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Gray_1, Gray_2, Gray_3, Gray_5} from '../../Utils/Colors';
import {windowWidth} from '../../Utils/Themes';
import LoadingDots from '../../Components/LoadingDots';

const CatalogProductsList = props => {
  const isFocused = useIsFocused();
  const params = props.route.params;
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  return (
    <LinearGradient style={{flex: 1}} colors={['#5D5C58', '#5D5C58', 'white']}>
      <TitleAndArrow navigation={props.navigation} title={params.catalogName} />
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
