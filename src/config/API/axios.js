import axios, {AxiosError, AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from './servers';

export default async function HttpRequest(url, method, data) {
  let token = '';
  let res;
  let jsonValue = await AsyncStorage.getItem('@barbershop');
  let storageData = jsonValue != null ? await JSON.parse(jsonValue) : null;
  token = storageData?.token;

  await fetch('https://b-shop.online/api/Users/Create', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber: '0504617774',
    }),
  })
    .then(r => r.json())
    .then(data => {
      console.log('data Hereeeeeee ' + data);
      res = data;
    })
    .catch(err => console.log('errorrrrrrrr ' + err));

  // let response = await axios
  //   .request({
  //     method: method,
  //     baseURL: API_URL,
  //     url: url,
  //     data: data,
  //     headers: {
  //       Authorization: 'Bearer ' + token,
  //       Accept: 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   })
  //   .then(result => {
  //     console.log('recieved result');
  //     console.log(result);
  //     console.log(JSON.parse(result));
  //     return Promise.resolve(result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     return Promise.resolve(err.response);
  //   });

  // return content;
}
