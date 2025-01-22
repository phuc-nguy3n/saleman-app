/* eslint-disable react-native/no-inline-styles */
import {Colors, FontSizes} from '../config/const';
import {Text, Image, View} from 'react-native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {generateOrderQuantity} from '../utils';

type PropsType = {
  img: ImageSourcePropType;
  title: string;
  quantity: number | string;
};

const OrderItem = ({img, title, quantity}: PropsType) => {
  return (
    <View
      style={{
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        position: 'relative',
      }}>
      <View
        style={{
          minWidth: 20,
          minHeight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.error,

          borderRadius: 50,

          position: 'absolute',
          zIndex: 1,
          top: 0,
          right: 4,
        }}>
        <Text
          style={{
            padding: 4,
            color: 'white',
            fontSize: 10,
          }}>
          {generateOrderQuantity(quantity)}
        </Text>
      </View>

      <Image style={{width: 40, height: 40}} source={img} />
      <Text style={{fontWeight: 300, fontSize: FontSizes.small}}>{title}</Text>
    </View>
  );
};

export default OrderItem;
