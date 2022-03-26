import axios, {AxiosError, AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from './servers';

export default async function HttpRequest(url, method, data) {
  let token = '';
  let jsonValue = await AsyncStorage.getItem('@barbershop');
  let storageData = jsonValue != null ? await JSON.parse(jsonValue) : null;
  token = storageData?.token;

  axios({
    method: method,
    url: API_URL + url,
    data: data,
    headers: {Authorization: 'Bearer ' + token}, // ! check this later
  }).then(
    response => {
      return response.data;
    },
    error => {
      console.log(error);
    },
  );
}
