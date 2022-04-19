import {View, Text} from 'react-native';
import React from 'react';
import MainCard from '../../Components/MainCard';
import TitleAndArrow from '../../Components/TitleAndArrow';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';

export default function Admin(props) {
  return (
    <View style={{flex: 1}}>
      <TitleAndArrow navigation={props.navigation} title={'Admin'} />
      <MainCard size={85} isYellow={true}>
        <View style={{}}>
          <CategoryCard />
          <View
            style={{
              width: '100%',
              backgroundColor: 'black',
              height: 2,
              marginTop: 10,
            }}
          />
          <ProductCard />
        </View>
      </MainCard>
    </View>
  );
}
