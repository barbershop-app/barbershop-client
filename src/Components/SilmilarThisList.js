import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimilarCardProduct from './SimilarCardProduct';
import HttpRequest from '../config/API/axios';

const SilmilarThisList = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(props.catagoryId);
    HttpCall();
  }, []);

  const HttpCall = async () => {
    const result = await HttpRequest(
      `Market/GetAllProductsByCategoryId/${props.catagoryId}`,
      'GET',
      '',
    );
    console.log(result.data);
    if (result.status === 200) setData(result.data.products);
    else props.navigation.goBack();
  };
  return (
    <View style={{marginTop: '3%', height: '32%', width: '100%'}}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
        Silmilar This
      </Text>
      <ScrollView horizontal={true} style={{marginLeft: '2%'}}>
        {data.length > 0 &&
          data?.map((e, index) => (
            <SimilarCardProduct item={e} key={index + 'KeyIndex_SCP'} />
          ))}
      </ScrollView>
    </View>
  );
};

export default SilmilarThisList;
