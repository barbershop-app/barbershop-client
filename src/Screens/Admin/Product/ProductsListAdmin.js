import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductAdminCard from './ProductAdminCard';
import TitleAndArrow from '../../../Components/TitleAndArrow';
import {useIsFocused} from '@react-navigation/native';
import HttpRequest from '../../../config/API/axios';
import FormAlertUpdateItem from './FormAlertUpdateItem';
import FormAlertCreateItem from './FormAlertCreateItem';

export default function ProductsListAdmin(props) {
  const params = props.route.params;
  const isFocused = useIsFocused();
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const [visible, setVisible] = useState(false);
  const [visible_1, setVisible_1] = useState(false);
  const [newItem, setNewItem] = useState({});

  useEffect(() => {
    setLoading(true);
    HttpCall();
  }, [isFocused]);

  const updateProduct = item => {
    setNewItem(item);
    setVisible(true);
    setItem(item);
    console.log(item);
  };

  const createProduct = item => {
    setNewItem({});
    setVisible_1(true);
  };

  const OnClickUpdate = async () => {
    if (item !== newItem) {
      console.log(newItem);
      const result = await HttpRequest('Market/UpdateProduct', 'POST', newItem);
      if (result.status === 200) console.log(result.status);
      else console.log(result);
    } else {
      console.log('nothing new');
      setVisible(false);
    }
  };

  const OnClickCreate = async data => {
    console.log(newItem.imageSource);
    if (
      !(
        newItem.price === undefined ||
        newItem.price.trim() === '' ||
        newItem.name === undefined ||
        newItem.name.trim() === '' ||
        newItem.description === undefined ||
        newItem.description.trim() === ''
      )
    ) {
      console.log({
        ...newItem,
        categoryId: params.item.id,
        ...data,
        imageSource:
          newItem.imageSource === undefined ? 'string' : newItem.imageSource,
      });
      //! send to http request create product
      //! then check if 200 or no if yes update products if no show error
    } else {
      console.log('one of required is not filled');
    }
  };
  //{//
  // //  "categoryId": 0,
  // //  "name": "string",
  //// "description": "string",
  // //  "price": 0,
  // //  "isAvailable": true,
  ////"onSale": true,
  //  // "onSalePercentage": 0,
  //   "imageSource": "string"
  //}
  //    "isAvailable": true, "name": "test", "onSale": true, "onSalePercentage": 0, "price": "55"}

  const HttpCall = async () => {
    const result = await HttpRequest(
      `Market/GetAllProductsByCategoryId/${params.item.id}`,
      'GET',
      '',
    );
    console.log(result.data.products.length);

    if (result.status === 200) {
      setProductsList(result.data.products);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <View>
      <TitleAndArrow navigation={props.navigation} title={'test'} />
      <TouchableOpacity
        style={{width: '90%', alignSelf: 'center'}}
        onPress={() => createProduct()}>
        <Text
          style={{
            borderWidth: 1,
            padding: 5,
            borderRadius: 15,
            alignSelf: 'flex-end',
            color: 'black',
            fontWeight: 'bold',
          }}>
          Add Product
        </Text>
      </TouchableOpacity>
      {productsList.length > 0 &&
        productsList.map((e, index) => (
          <ProductAdminCard
            updateProduct={updateProduct}
            item={e}
            key={index}
          />
        ))}
      <FormAlertUpdateItem
        setVisible={setVisible}
        newItem={newItem}
        setNewItem={setNewItem}
        visible={visible}
        item={item}
        OnClickUpdate={OnClickUpdate}
      />
      <FormAlertCreateItem
        setVisible={setVisible_1}
        newItem={newItem}
        setNewItem={setNewItem}
        visible={visible_1}
        item={item}
        OnClickCreate={OnClickCreate}
      />
    </View>
  );
}
