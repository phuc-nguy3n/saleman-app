/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Category, Colors} from '../../config/const';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {productImg} from '../../assets/images';
import {OrderCateType, OrderMgmtScreenProps} from '../../types';

const OrderMgmtScreen: React.FC<OrderMgmtScreenProps> = ({route}) => {
  const {order} = Category;

  const [orderCate, setOrderCate] = useState(route.params.cateOrders);

  const [value, setValue] = useState('');

  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={{backgroundColor: 'white'}}>
        {/* Categories */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => setOrderCate(0)}
            style={{width: '23%'}}>
            <CateItem
              text={order.newOrder}
              active={orderCate === OrderCateType.new}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOrderCate(1)}
            style={{width: '23%'}}>
            <CateItem
              text={order.shipping}
              active={orderCate === OrderCateType.shipping}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOrderCate(2)}
            style={{width: '23%'}}>
            <CateItem
              text={order.shipped}
              active={orderCate === OrderCateType.shipped}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOrderCate(3)}
            style={{width: '23%'}}>
            <CateItem
              text={order.returnOrder}
              active={orderCate === OrderCateType.return}
            />
          </TouchableOpacity>
        </View>

        {/* Search */}

        <View style={styles.container}>
          {/* TextInput */}

          <TextInput
            style={styles.input}
            value={value}
            onChangeText={text => setValue(text)}
            placeholder="Tìm kiếm tên, mã sản phẩm"
            placeholderTextColor="#aaa"
          />

          {/* Nút filter */}
          <TouchableOpacity onPress={() => console.log('filter')}>
            <Ionicons name="search-outline" size={20} color="#555" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Orders */}
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 8,
          paddingHorizontal: 16,
          marginTop: 4,
        }}>
        {/* Header   */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 8,
            borderBottomWidth: 1,
            borderColor: Colors.line,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text>Hoàn thành</Text>
            <Text> | </Text>
            <Text>25/10/2021 - 10:45</Text>
          </View>

          <Text>Xem đơn hàng</Text>
        </View>

        {/* Body */}
        <View style={{paddingTop: 8, flexDirection: 'row', gap: 8}}>
          <View>
            <Image
              style={{
                width: 86,
                height: 86,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.line,
              }}
              source={productImg}
            />
          </View>

          <View style={{gap: 4}}>
            <Text style={{color: Colors.textSecond}}>DHNK3008TP2021</Text>
            <Text style={{fontWeight: 500}}>
              Trương Minh Tuyền - 0909 888 777
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{flex: 1, flexWrap: 'wrap', color: Colors.textSecond}}>
                Jordan One Take II PF, Jordan Why Not? Zer0.4, Jordan Why Not
                ...
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={{color: Colors.textSecond}}>5 sản phẩm</Text>
              <Text> | </Text>
              <Text style={{color: Colors.primary, fontWeight: 500}}>
                9,000,000đ
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const CateItem = ({text, active}: {text: string; active: boolean}) => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: active ? Colors.primary : Colors.outline,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: active ? Colors.third : 'white',
      }}>
      <Text
        style={{
          fontSize: 10,
          fontWeight: 300,
          color: active ? Colors.primary : Colors.textSecond,
        }}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    paddingVertical: 0,
    paddingLeft: 10,
    paddingRight: 30,
  },
  searchIcon: {
    position: 'absolute',
    right: 40,
  },
  //   filterButton: {
  //     height: 30,
  //     width: 30,
  //     marginLeft: 10,
  //     backgroundColor: '#eaeaea',
  //     borderRadius: 8,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
});

export default OrderMgmtScreen;
