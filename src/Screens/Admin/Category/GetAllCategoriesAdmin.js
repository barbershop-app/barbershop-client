import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HttpRequest from '../../../config/API/axios';
import CategoryAdminCard from './CategoryAdminCard';
import Dialog from 'react-native-dialog';
import LoadingDots from '../../../Components/LoadingDots';
import { useSelector } from 'react-redux';

export default function GetAllCategoriesAdmin(props) {
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [categoryData, setCategoryData] = useState({name: null, url: 'string'});
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  
  useEffect(() => {
    HttpCall();
  }, []);

  const HttpCall = async () => {
    const result = await HttpRequest('market/GetAllCategories', 'GET');
    console.log(result.status);
    if (result.status === 200) {
      setLoading(false);
      setCategory(result.data.categories);
    }
  };
  const deleteCategory = async id => {
    console.log(id);
    const result = await HttpRequest(`Market/DeleteCategory/${id}`, 'POST', {});
    if (result.status === 200) HttpCall();
    else console.log(result);
  };
  const createCategory = async () => {
    if (categoryData.name !== null) {
      const result = await HttpRequest(`Market/CreateCategory`, 'POST', {
        name: categoryData.name,
        imageSource: categoryData.url,
      });
      if (result.status === 200) {
        HttpCall();
        setVisible(false);
        setCategoryData({name: null, url: 'string'});
      } else {
        setVisible(false);
        console.log(result);
      }
    } else {
      setMessage('The Name Is Empty !');
      setTimeout(() => {
        setMessage('');
      }, 2500);
    }
  };
  return loading ? (
    <LoadingDots />
  ) : (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '3%',
          alignItems: 'center',
          borderBottomWidth: 1,
        }}>
        <Text style={styles.textTitle}>Image</Text>
        <Text style={styles.textTitle}>Title</Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text
            style={[
              styles.textTitle,
              {
                borderWidth: 1,
                borderRadius: 15,
                padding: 5,
                textAlign: 'center',
                marginBottom: 5,
              },
            ]}>
            create +
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {categories.length > 0 &&
          categories.map((e, index) => (
            <CategoryAdminCard
              navigation={props.navigation}
              deleteCategory={deleteCategory}
              key={index}
              item={e}
            />
          ))}
      </ScrollView>
      <Dialog.Container
        contentStyle={{
          borderRadius: 25,
          backgroundColor: 'white',
          borderWidth: 1,
        }}
        visible={visible}>
        <Dialog.Title style={{fontWeight: 'bold', color: 'black'}}>
          Enter Category Details {'\n' + message}
        </Dialog.Title>
        {/* <Dialog.input></Dialog.input> */}
        <View style={{width: '80%', marginLeft: '5%'}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              margin: 1,
              padding: -5,
              width: '100%',
              color: 'black',
              maxWidth: '100%',
            }}
            placeholderTextColor="gray"
            value={undefined}
            maxlength={3}
            onChangeText={e => {
              setCategoryData({...categoryData, name: e});
            }}
            placeholder="Category Name"
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              padding: -5,
              marginTop: 10,
              width: '100%',
              color: 'black',
              maxWidth: '100%',
            }}
            placeholderTextColor="grey"
            value={undefined}
            maxlength={3}
            onChangeText={e => {
              setCategoryData({...categoryData, url: e});
            }}
            placeholder="Url Image"
          />
        </View>
        <View style={{width: '100%', marginTop: 10}}>
          <Dialog.Button
            label="Create"
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '80%',
              borderWidth: 1,
              borderRadius: 15,
              backgroundColor: SelectedGradientColor[0],
            }}
            onPress={createCategory}
          />
        </View>
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
