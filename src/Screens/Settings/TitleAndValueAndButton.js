import {View, Text} from 'react-native';
import React from 'react';
import GrayBigTitle from './GrayBigTitle';
import MainButton from '../../Components/MainButton';

const TitleAndValueAndButton = props => {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <View>
        <GrayBigTitle title={props.bigTitle} />
        <Text style={{fontSize: 18, color: 'black', marginLeft: 5}}>
          {props.value}
        </Text>
      </View>
      <View>
        {props.button ? (
          <MainButton
            color={'white'}
            padding={props.padding ? props.padding : undefined}
            width={props.buttonWidth}
            height={props.buttonHeight}
            title={props.buttonTitle}
            borderRadius={20}
            onPressFunction={
              props.onPressFunction === undefined
                ? undefined
                : props.onPressFunction
            }
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default TitleAndValueAndButton;
