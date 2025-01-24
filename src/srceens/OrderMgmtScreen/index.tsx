/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Category, Colors} from '../../config/const';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

import {
  OrderCateType,
  OrderMgmtScreenProps,
  OrderType,
  Product,
} from '../../types';
import {
  generateOrderStatus,
  formatTimestamp,
  formatPrice,
} from '../../utils/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const renderOrderStatus = (status: string) => {
  const order = generateOrderStatus(status);
  return (
    <View>
      <Text style={{color: order.color}}>{order.label}</Text>
    </View>
  );
};

const renderOrderDate = (timestamp: string) => {
  return (
    <View>
      <Text style={{color: Colors.textSecond}}>
        {formatTimestamp(timestamp, 'date')} -{' '}
        {formatTimestamp(timestamp, 'time')}
      </Text>
    </View>
  );
};

const renderProductNames = (products: Product[]) => {
  const productNames = products.map(item => item.name).join(', ');
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          flex: 1,
          flexWrap: 'wrap',
          color: Colors.textSecond,
        }}>
        {productNames}
      </Text>
    </View>
  );
};

const OrderMgmtScreen: React.FC<OrderMgmtScreenProps> = ({route}) => {
  const {order} = Category;

  const orderTotal = route.params.orders;
  const orderInit = orderTotal.filter(
    order => order.status === route.params.cateOrders,
  );

  const [searchvValue, setSearchValue] = useState('');

  const [orderCate, setOrderCate] = useState(route.params.cateOrders);
  const [orderList, setOrderList] = useState<OrderType[]>(orderInit);
  const [ordersTerm, setOrderTerm] = useState<OrderType[]>([]);

  useEffect(() => {
    const searchOrders = (
      orders: OrderType[],
      searchTerm: string,
    ): OrderType[] => {
      if (!searchTerm.trim()) return orderList;

      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      return orders.filter(order =>
        order.products.some(
          product =>
            product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            product.code.toLowerCase().includes(lowerCaseSearchTerm),
        ),
      );
    };

    const products = searchOrders(orderList, searchvValue);
    setOrderTerm(products);
  }, [searchvValue, orderList]);

  const handleOrderCateActive = (cate: string) => {
    if (cate === OrderCateType.new) {
      setOrderCate(OrderCateType.new);
      setOrderList(
        orderTotal.filter(order => order.status === OrderCateType.new),
      );
    } else if (cate === OrderCateType.shipping) {
      setOrderCate(OrderCateType.shipping);
      setOrderList(
        orderTotal.filter(order => order.status === OrderCateType.shipping),
      );
    } else if (cate === OrderCateType.shipped) {
      setOrderCate(OrderCateType.shipped);
      setOrderList(
        orderTotal.filter(order => order.status === OrderCateType.shipped),
      );
    } else if (cate === OrderCateType.return) {
      setOrderCate(OrderCateType.return);
      setOrderList(
        orderTotal.filter(order => order.status === OrderCateType.return),
      );
    }
  };

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
            onPress={() => handleOrderCateActive(OrderCateType.new)}
            style={{width: '23%'}}>
            <CateItem
              text={order.newOrder}
              active={orderCate === OrderCateType.new}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleOrderCateActive(OrderCateType.shipping)}
            style={{width: '23%'}}>
            <CateItem
              text={order.shipping}
              active={orderCate === OrderCateType.shipping}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleOrderCateActive(OrderCateType.shipped)}
            style={{width: '23%'}}>
            <CateItem
              text={order.shipped}
              active={orderCate === OrderCateType.shipped}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleOrderCateActive(OrderCateType.return)}
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
            value={searchvValue}
            onChangeText={text => setSearchValue(text)}
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
      <ScrollView>
        {ordersTerm.map((item, index) => (
          <View
            key={index}
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
                {renderOrderStatus(item.status)}
                <Text> | </Text>
                {renderOrderDate(item.timestamp)}
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}
                onPress={() => console.log('test')}>
                <Text
                  style={{color: Colors.link, fontSize: 12, lineHeight: 12}}>
                  {' '}
                  Xem đơn hàng
                </Text>
                <FontAwesome
                  size={10}
                  color={Colors.link}
                  name={'chevron-right'}
                />
              </TouchableOpacity>
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
                  source={{uri: item.products[0].img}}
                />
              </View>

              <View style={{gap: 4, width: '70%'}}>
                <Text style={{color: Colors.textSecond}}>{item.code}</Text>
                <Text style={{fontWeight: 500}}>
                  {item.orderer} - {item.phoneNumber}
                </Text>
                {renderProductNames(item.products)}

                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: Colors.textSecond}}>
                    {item.products.length} sản phẩm
                  </Text>
                  <Text> | </Text>
                  <Text style={{color: Colors.primary, fontWeight: 500}}>
                    {formatPrice(item.totalPrice)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
