import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CatalogProductCard from '../../Components/CatalogProductCard';
import TitleAndArrow from '../../Components/TitleAndArrow';
import HttpRequest from '../../config/API/axios';

const CatalogProductsList = props => {
  const params = props.route.params;
  const [products, setProducts] = useState([]);
  const [catagoryId, setCatagoryId] = useState(null);
  useEffect(() => {
    HttpCall();
  }, []);

  const HttpCall = async () => {
    const result = await HttpRequest(
      `Market/GetAllProductsByCategoryId/${params.catagoryId}`,
      'GET',
      '',
    );
    console.log(result.data);
    if (result.status === 200) {
      setProducts(result.data.products);
      setCatagoryId(result.data.categoryId);
    } else props.navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <TitleAndArrow navigation={props.navigation} title={params.catalogName} />
      <ScrollView>
        {products.length > 0 &&
          products?.map((item, index) => (
            <CatalogProductCard
              navigation={props.navigation}
              key={index}
              index={index}
              item={item}
              catagoryId={catagoryId}
            />
          ))}
      </ScrollView>
    </View>
  );
};
export default CatalogProductsList;
