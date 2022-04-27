import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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
    console.log(params);
    setLoading(true);
    HttpCall();
  }, [isFocused]);

  const updateProduct = item => {
    setNewItem(item);
    setVisible(true);
    setItem(item);
  };

  const createProduct = item => {
    setNewItem({});
    setVisible_1(true);
  };

  const OnClickUpdate = async () => {
    console.log({...newItem, categoryId: params.item.id});
    if (item !== newItem) {
      const result = await HttpRequest('Market/UpdateProduct', 'POST', {
        ...newItem,
        categoryId: params.item.id,
      });
      console.log(result.status);
      if (result.status === 200) {
        HttpCall();
        setVisible(false);
      } else console.log(result);
    } else {
      console.log('nothing new');
      setVisible(false);
    }
  };
  const removeProduct = async id => {
    const result = await HttpRequest(`Market/DeleteProduct/${id}`, 'POST', '');
    if (result.status === 200) {
      //! alert off
      HttpCall();
    }
  };
  const OnClickCreate = async data => {
    console.log(data);
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
      // console.log({
      //   ...newItem,
      //   categoryId: params.item.id,
      //   ...data,
      //   imageSource:
      //     newItem.imageSource === undefined ? 'string' : newItem.imageSource,
      // });
      const result = await HttpRequest('Market/CreateProduct', 'POST', {
        ...newItem,
        categoryId: params.item.id,
        ...data,
        imageSource:
          newItem.imageSource === undefined ? 'string' : newItem.imageSource,
      });

      if (result.status === 200) {
        setVisible_1(false);
        HttpCall();
      }
      //! send to http request create product
      //! then check if 200 or no if yes update products if no show error
    } else {
      console.log(result);
      console.log('one of required is not filled');
    }
  };

  const HttpCall = async () => {
    const result = await HttpRequest(
      `Market/GetAllProductsByCategoryId/${params.item.id}`,
      'GET',
      '',
    );

    if (result.status === 200) {
      setProductsList(result.data.products);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <View>
      <TitleAndArrow navigation={props.navigation} title={params.item.name} />
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
      <ScrollView style={{marginBottom: 100}}>
        {productsList.length > 0 &&
          productsList.map((e, index) => (
            <ProductAdminCard
              updateProduct={updateProduct}
              item={e}
              key={index}
              removeProduct={removeProduct}
            />
          ))}
      </ScrollView>
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
