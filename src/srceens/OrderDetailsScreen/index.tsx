import React from 'react';
import {View} from 'react-native';
import {OrderDetailsScreenProps} from '../../types';
import {formatPrice, formatTimestamp, generateOrderStatus} from '../../utils';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {Text} from 'react-native-paper';

const renderOrderDate = (timestamp: string) => {
  return (
    <View>
      <Text style={[globalStyles.fontWeightLight, styles.orderInfoContent]}>
        {formatTimestamp(timestamp, 'date')} -{' '}
        {formatTimestamp(timestamp, 'time')}
      </Text>
    </View>
  );
};

const renderOrderStatus = (status: string) => {
  const order = generateOrderStatus(status);
  return (
    <View style={[styles.orderStatusBox, globalStyles.ph8, globalStyles.pv4]}>
      <Text
        style={[
          globalStyles.fontWeightLight,
          styles.orderStatusText,
          {color: order.color},
        ]}>
        {order.label}
      </Text>
    </View>
  );
};

const OrderDetailsScreen: React.FC<OrderDetailsScreenProps> = ({route}) => {
  const order = route.params.order;
  const {
    code,
    orderer,
    phoneNumber,
    timestamp,
    address,
    products,
    status,
    totalPrice,
  } = order;

  return (
    <View style={{flex: 1, gap: 8}}>
      {/* Order info */}
      <View style={[globalStyles.ph16, globalStyles.pv8, globalStyles.bgWhite]}>
        <View style={[styles.container, {marginBottom: 4}]}>
          <Text variant="titleSmall">Thông tin đơn hàng</Text>

          {renderOrderStatus(status)}
        </View>

        <View style={styles.orderInfoContentArea}>
          <View style={styles.orderInfoContentBox}>
            <Ionicons size={16} name={'reader-outline'} />
            <Text
              style={[globalStyles.fontWeightLight, styles.orderInfoContent]}>
              {code}
            </Text>
          </View>

          <View style={styles.orderInfoContentBox}>
            <Ionicons size={16} name={'time-outline'} />
            {renderOrderDate(timestamp)}
          </View>

          <View style={styles.orderInfoContentBox}>
            <Ionicons size={16} name={'person-outline'} />
            <Text
              style={[globalStyles.fontWeightLight, styles.orderInfoContent]}>
              {orderer}
            </Text>
          </View>

          <View style={styles.orderInfoContentBox}>
            <Ionicons size={16} name={'call-outline'} />
            <Text
              style={[globalStyles.fontWeightLight, styles.orderInfoContent]}>
              {phoneNumber}
            </Text>
          </View>

          <View style={styles.orderInfoContentBox}>
            <Ionicons size={16} name={'location-outline'} />
            <View style={{flexShrink: 1}}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[globalStyles.fontWeightLight, styles.orderInfoContent]}>
                {address}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Order details */}
      <View style={[globalStyles.bgWhite, globalStyles.ph16, {paddingTop: 8}]}>
        <Text variant="titleSmall">Chi tiết đơn hàng</Text>

        <View>
          {products.map((item, index) => (
            <View key={index} style={{paddingVertical: 10}}>
              <View style={styles.orderDetailsBox}>
                <View style={styles.productImgBox}>
                  <Image style={styles.productImg} source={{uri: item.img}} />
                </View>
                <View style={{gap: 4}}>
                  <Text variant="labelMedium">{item.name}</Text>
                  <Text variant="bodyMedium">{item.price}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 4,
                      }}>
                      <Text
                        style={[
                          globalStyles.fontWeightLight,
                          globalStyles.fontSmall,
                          {lineHeight: 16},
                        ]}>
                        Số lượng:
                      </Text>
                      <Text variant="bodySmall">01</Text>
                    </View>
                    <View style={{marginHorizontal: 4}}>
                      <Text> | </Text>
                    </View>
                    <Text
                      variant="labelLarge"
                      style={globalStyles.primaryColor}>
                      {formatPrice(item.price)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Totals */}
      <View
        style={[
          globalStyles.ph16,
          globalStyles.pv8,
          globalStyles.bgWhite,
          {
            flex: 1,
            gap: 8,
          },
        ]}>
        <View style={styles.provisional}>
          <View style={styles.container}>
            <Text variant="bodySmall" style={globalStyles.textSecondColor}>
              Tạm tính
            </Text>
            <Text variant="bodySmall">{formatPrice(totalPrice)}</Text>
          </View>

          <View style={styles.container}>
            <Text variant="bodySmall" style={globalStyles.textSecondColor}>
              Khuyến mãi
            </Text>
            <Text variant="bodySmall">- 0đ</Text>
          </View>

          <View style={styles.container}>
            <Text variant="bodySmall" style={globalStyles.textSecondColor}>
              Thuế VAT
            </Text>
            <Text variant="bodySmall">+ 0đ</Text>
          </View>

          <View style={styles.container}>
            <Text variant="bodySmall" style={globalStyles.textSecondColor}>
              Phí vận chuyển
            </Text>
            <Text variant="bodySmall">+ 0đ</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text variant="labelLarge" style={globalStyles.primaryColor}>
            Tổng thanh toán
          </Text>
          <Text variant="labelLarge" style={globalStyles.errorColor}>
            {formatPrice(totalPrice)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsScreen;
