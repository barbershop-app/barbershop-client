import {View, Text} from 'react-native';
import React from 'react';
import MainCard from '../../Components/MainCard';
import TitleAndArrow from '../../Components/TitleAndArrow';
import CategoryCard from './others/CategoryCard';
import ProductCard from './others/ProductCard';
import GetAllCategoriesAdmin from './Category/GetAllCategoriesAdmin';
import { useSelector } from 'react-redux';


export default function Admin(props) {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  return (
    <View style={{backgroundColor: SelectedGradientColor[1], flex: 1}}>
      <TitleAndArrow navigation={props.navigation} title={'Admin'} />
      <MainCard size={85} isYellow={false}>
        <GetAllCategoriesAdmin navigation={props.navigation} />
      </MainCard>
    </View>
  );
}

/* <View style={{}}>
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
</View> */
