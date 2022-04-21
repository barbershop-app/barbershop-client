import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoriesCard from './CategoriesCard';
import HttpRequest from '../../../config/API/axios';
import {useIsFocused} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import LoadingDots from '../../../Components/LoadingDots';

const CategoriesList = props => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    HttpCall();
  }, []);
  const HttpCall = async () => {
    const result = await HttpRequest('market/GetAllCategories', 'GET');
    if (result.status === 200) {
      setLoading(false);
      setList(result.data.categories);
    }
  };

  return (
    <View style={{marginTop: '5%'}}>
      <Text
        style={{
          fontSize: 13,
          color: 'white',
          marginLeft: '5%',

          fontWeight: 'bold',
        }}>
        Categories
      </Text>
      {loading ? (
        <LoadingDots />
      ) : (
        <ScrollView horizontal={true} style={{marginLeft: '5%'}}>
          {list.length > 0 &&
            list.map((item, index) => (
              <CategoriesCard
                id={item.id}
                navigation={props.navigation}
                key={index}
                uri={item.imageSource}
                categoriesName={item.name}
                quantity={item.numberOfProductsInCategory}
                onPressFunction={() => {
                  //nothing
                }}
              />
            ))}
        </ScrollView>
      )}
    </View>
  );
};

export default CategoriesList;
