import React from 'react';
import {Text, View} from 'react-native';
import {OrderDetailsScreenProps} from '../../types';
import {formatPrice, formatTimestamp, generateOrderStatus} from '../../utils';
import {Colors, FontSizes} from '../../config/const';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const renderOrderStatus = (status: string) => {
  const order = generateOrderStatus(status);
  return (
    <View
      style={{
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        backgroundColor: '#e9e9e9',
      }}>
      <Text style={{color: order.color}}>{order.label}</Text>
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
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 14, fontWeight: 500}}>
            Thông tin đơn hàng
          </Text>

          {renderOrderStatus(status)}
        </View>

        <View style={{marginTop: 4, gap: 4}}>
          <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
            <Ionicons size={16} name={'reader-outline'} />
            <Text style={{color: Colors.textSecond}}>{code}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 8}}>
            <Ionicons size={16} name={'time-outline'} />
            {renderOrderDate(timestamp)}
          </View>

          <View style={{flexDirection: 'row', gap: 8}}>
            <Ionicons size={16} name={'person-outline'} />
            <Text style={{color: Colors.textSecond}}>{orderer}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 8}}>
            <Ionicons size={16} name={'call-outline'} />
            <Text style={{color: Colors.textSecond}}>{phoneNumber}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 8}}>
            <Ionicons size={16} name={'location-outline'} />
            <View style={{width: '70%'}}>
              <Text style={{color: Colors.textSecond}}>{address}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Body */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 14, fontWeight: 500}}>Chi tiết đơn hàng</Text>

        <View>
          {products.map((item, index) => (
            <View key={index} style={{padding: 10}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                <View
                  style={{
                    overflow: 'hidden',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: Colors.line,
                  }}>
                  <Image
                    style={{width: 70, height: 70, objectFit: 'cover'}}
                    source={{uri: item.img}}
                  />
                </View>
                <View style={{gap: 4}}>
                  <Text style={{fontSize: FontSizes.small, fontWeight: 500}}>
                    {item.name}
                  </Text>
                  <Text style={{fontSize: 14, fontWeight: 400}}>
                    {item.price}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 4,
                      }}>
                      <Text
                        style={{fontSize: FontSizes.small, fontWeight: 300}}>
                        Số lượng
                      </Text>
                      <Text
                        style={{fontSize: FontSizes.small, fontWeight: 500}}>
                        01
                      </Text>
                    </View>
                    <View style={{marginHorizontal: 4}}>
                      <Text> | </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: Colors.primary,
                      }}>
                      {formatPrice(item.price)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: 'white',
          flex: 1,
          gap: 8,
        }}>
        <View
          style={{
            gap: 4,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: Colors.textSecond,
              }}>
              Tạm tính
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
              }}>
              {formatPrice(totalPrice)}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: Colors.textSecond,
              }}>
              Khuyến mãi
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
              }}>
              - 0đ
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: Colors.textSecond,
              }}>
              Thuế VAT
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
              }}>
              + 0đ
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: Colors.textSecond,
              }}>
              Phí vận chuyển
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
              }}>
              + 0đ
            </Text>
          </View>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: Colors.line,
            paddingVertical: 4,
          }}></View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: Colors.primary,
            }}>
            Tổng thanh toán
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: Colors.error,
            }}>
            {formatPrice(totalPrice)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsScreen;
