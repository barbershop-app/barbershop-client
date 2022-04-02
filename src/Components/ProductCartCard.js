import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import CartProductQuantity from './CartProductQuantity';
const ProductCartCard = props => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(props.item.quantity);
  }, []);

  const changeQuantity = (method, itemId) => {
    method
      ? setQuantity(quantity + 1)
      : quantity === 1
      ? null
      : setQuantity(quantity - 1);

    //* send to mycartcomponent update by id
    props.changeQuantity(
      itemId,
      quantity + (method ? 1 : quantity === 1 ? 0 : -1),
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 10,
        width: '95%',
        borderBottomWidth: 1,
        alignSelf: 'center',
        padding: 10,
      }}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 15,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Image
          source={{uri: props.item.imageSource}}
          style={{width: 110, height: 110, padding: 5}}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            maxWidth: '100%',
          }}>
          {props.item.name}
        </Text>
        {props.item.onSale ? (
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              maxWidth: '100%',
              color: 'red',
              textDecorationLine: 'line-through',
            }}>
            $ {props.item.price.toFixed(2)}
          </Text>
        ) : (
          <></>
        )}

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            maxWidth: '100%',
          }}>
          $
          {props.item.onSale
            ? (
                props.item.price -
                (props.item.price / 100) * props.item.onSalePercentage
              ).toFixed(2) 
            : props.item.price.toFixed(2)}{' '}
        </Text>
      </View>
      <CartProductQuantity
        itemId={props.item.id}
        quantity={quantity}
        removeItem={id => props.removeItem(id)}
        changeQuantity={(method, itemId) => changeQuantity(method, itemId)}
      />
      <View
        style={{
          borderWidth: 1,
          height: 30,
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          borderRadius: 10,
        }}>
        <Icon
          name="delete"
          size={25}
          color="black"
          onPress={() => props.removeItem(props.item.id)}
          style={{}}
        />
      </View>
    </View>
  );
};

export default ProductCartCard;
