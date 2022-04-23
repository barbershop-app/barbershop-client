import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainInputText from '../../../Components/MainInputText';
import MainButton from '../../../Components/MainButton';
import HttpRequest from '../../../config/API/axios';
import AlertOneButton from '../../../Components/AlertOneButton';
import AddCategory from './AddCategory';
import RemoveCategory from './RemoveCategory';

export default function CategoryCard() {
  return (
    <View>
      {/* Category */}
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Category
      </Text>
      {/* Add */}
      <AddCategory />
      {/* Remove */}
      <RemoveCategory />
      {/* Update */}

      {/* GetAllCategories */}
    </View>
  );
}
