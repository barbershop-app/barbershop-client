import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SpecialOfferCardProduct from './SpecialOfferCardProduct';
import HttpRequest from '../config/API/axios';
import * as Animatable from 'react-native-animatable';
import LoadingDots from './LoadingDots';

const SpecialOffersList = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    HttpCall();
  }, []);

  const HttpCall = async () => {
    const result = await HttpRequest('Market/GetAllProducts', 'GET');
    if (result.status === 200) {
      setLoading(false);
      setData(result.data.products?.filter(e => e.onSale === true));
    }
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 13,
          color: 'black',
          marginLeft: '5%',
          marginTop: '5%',
          fontWeight: 'bold',
        }}>
        Special Offers
      </Text>
      {loading ? (
        <LoadingDots />
      ) : (
        <ScrollView horizontal={true} style={{marginLeft: '5%'}}>
          {data.length > 0 &&
            data?.map((e, index) => {
              return (
                <SpecialOfferCardProduct
                  navigation={props.navigation}
                  key={index + 'KeyIndex'}
                  item={e}
                  index={index}
                />
              );
            })}
        </ScrollView>
      )}
    </View>
  );
};

export default SpecialOffersList;
