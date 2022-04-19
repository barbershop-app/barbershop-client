import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimilarCardProduct from './SimilarCardProduct';
import HttpRequest from '../config/API/axios';

const SilmilarThisList = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    HttpCall();
  }, []);

  const HttpCall = async () => {
    const result = await HttpRequest(
      `Market/GetAllProductsByCategoryId/${props.categoryId}`,
      'GET',
      '',
    );

    if (result.status === 200) setData(result.data.products);
    else console.log(result);
  };
  return (
    <View style={{marginTop: '3%', height: '32%', width: '100%'}}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
        Silmilar This
      </Text>
      <ScrollView horizontal={true} style={{marginLeft: '2%'}}>
        {data.length > 0 &&
          data?.map((e, index) => {
            return (
              <SimilarCardProduct
                navigation={props.navigation}
                item={e}
                key={index + 'KeyIndex_SCP'}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default SilmilarThisList;
