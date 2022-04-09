import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddToCart = product => {
  //   AsyncStorage.removeItem('cart-list');
  AsyncStorage.getItem('cart-list').then(data => {
    let JsonData = JSON.parse(data);
    console.log(JsonData);
    if (
      JsonData?.findIndex(e => e.id === product.id) !== -1 &&
      JsonData !== null
    ) {
      return false;
    } else {
      if (JsonData === null) {
        AsyncStorage.setItem(
          'cart-list',
          JSON.stringify([{...product, quantity: 1}]),
        );
      } else {
        AsyncStorage.setItem(
          'cart-list',
          JSON.stringify([...JsonData, {...product, quantity: 1}]),
        );
      }
    }
  });
};

// export const getCartList = () => {
//   return ;
// };

export const clearCartList = async () =>
  await AsyncStorage.removeItem('cart-list');

export const removeCartItem = id => {
  AsyncStorage.getItem('cart-list').then(data => {
    let newData = data?.filter(product => product.id !== id);
    AsyncStorage.setItem('cart-list', JSON.stringify(newData));
  });
};

export const changeQuantityAsyncStorage = (id, newQuantity) => {
  AsyncStorage.getItem('cart-list').then(data => {
    AsyncStorage.setItem(
      'cart-list',
      JSON.stringify(
        JSON.parse(data)?.map(item =>
          item.id === id ? {...item, quantity: newQuantity} : item,
        ),
      ),
    );
  });
};
