import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';

import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import {Category, Colors} from '../../config/const';
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
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {Text} from 'react-native-paper';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

const CateItem = ({text, active}: {text: string; active: boolean}) => {
  const cateActiveStyle = {
    button: {
      borderColor: active ? Colors.primary : Colors.outline,
      backgroundColor: active ? Colors.third : 'white',
    },
    color: {
      color: active ? Colors.primary : Colors.textSecond,
    },
  };

  return (
    <View style={[cateActiveStyle.button, styles.categoryItem]}>
      <Text
        style={[
          cateActiveStyle.color,
          globalStyles.fontWeightLight,
          styles.categoryItemText,
        ]}>
        {text}
      </Text>
    </View>
  );
};

const OrderCates = ({
  orderCate,
  setOrderCate,
  setOrderList,
  orderTotal,
}: {
  orderCate: string | number;
  setOrderCate: Dispatch<SetStateAction<string | number>>;
  setOrderList: Dispatch<SetStateAction<OrderType[]>>;
  orderTotal: OrderType[];
}) => {
  const {order} = Category;

  const orderCateConst = [
    {type: OrderCateType.new, text: order.newOrder},
    {type: OrderCateType.shipping, text: order.shipping},
    {type: OrderCateType.shipped, text: order.shipped},
    {type: OrderCateType.return, text: order.returnOrder},
  ];

  const handleOrderCateActive = (cate: string) => {
    setOrderCate(cate);
    setOrderList(orderTotal.filter(order => order.status === cate));
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginRight: -8}}>
      {orderCateConst.map(({type, text}) => (
        <TouchableOpacity
          key={type}
          onPress={() => handleOrderCateActive(type)}>
          <CateItem text={text} active={orderCate === type} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const renderOrderStatus = (status: string) => {
  const order = generateOrderStatus(status);
  return (
    <View>
      <Text variant="bodySmall" style={{color: order.color}}>
        {order.label}
      </Text>
    </View>
  );
};

const renderOrderDate = (timestamp: string) => {
  return (
    <View>
      <Text variant="bodySmall" style={globalStyles.textSecondColor}>
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
        style={[globalStyles.textSecondColor, styles.orderItemProductName]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {productNames}
      </Text>
    </View>
  );
};

const OrderMgmtScreen: React.FC<OrderMgmtScreenProps> = ({
  navigation,
  route,
}) => {
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

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.bgWhite}>
        {/* Categories */}
        <View style={styles.categories}>
          <OrderCates
            orderCate={orderCate}
            setOrderCate={setOrderCate}
            setOrderList={setOrderList}
            orderTotal={orderTotal}
          />
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            value={searchvValue}
            onChangeText={text => setSearchValue(text)}
            placeholder="Tìm kiếm tên, mã sản phẩm"
            placeholderTextColor="#aaa"
          />

          <View>
            <Ionicons name="search-outline" size={20} color="#555" />
          </View>
        </View>
      </View>

      {/* Orders */}
      <ScrollView>
        {ordersTerm.map((item, index) => (
          <View key={index} style={styles.orderItemWrapped}>
            {/* Header   */}
            <View style={[globalStyles.lineColor, styles.orderItemHeader]}>
              <View style={{flexDirection: 'row'}}>
                {renderOrderStatus(item.status)}
                <Text> | </Text>
                {renderOrderDate(item.timestamp)}
              </View>

              <TouchableOpacity
                style={styles.orderNavigationBox}
                onPress={() =>
                  navigation.navigate('OrderDetails', {
                    order: item,
                  })
                }>
                <Text style={[globalStyles.linkColor, globalStyles.fontSmall]}>
                  Xem đơn hàng
                </Text>
                <FontAwesome
                  size={10}
                  color={colors.link}
                  name={'chevron-right'}
                />
              </TouchableOpacity>
            </View>

            {/* Body */}
            <View style={styles.orderItemBody}>
              <View>
                <Image
                  style={[styles.orderItemImg]}
                  resizeMode="cover"
                  source={{uri: item.products[0].img}}
                />
              </View>

              <View style={styles.orderItemTextArea}>
                <Text variant="bodySmall" style={globalStyles.textSecondColor}>
                  {item.code}
                </Text>
                <Text variant="labelMedium">
                  {item.orderer} - {item.phoneNumber}
                </Text>
                {renderProductNames(item.products)}

                <Text>
                  <Text style={globalStyles.textSecondColor}>
                    {item.products.length} sản phẩm
                  </Text>
                  <Text> | </Text>
                  <Text variant="labelLarge" style={globalStyles.primaryColor}>
                    {formatPrice(item.totalPrice)}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default OrderMgmtScreen;
