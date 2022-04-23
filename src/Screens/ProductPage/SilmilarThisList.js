import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimilarCardProduct from './SimilarCardProduct';
import HttpRequest from '../../config/API/axios';
import {useIsFocused} from '@react-navigation/native';

const SilmilarThisList = props => {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);

  useEffect(() => {
    HttpCall();
  }, [isFocused]);

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
    <View style={{height: '32%', width: '100%'}}>
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
                categoryId={props.categoryId}
                key={index + 'KeyIndex_SCP'}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default SilmilarThisList;
