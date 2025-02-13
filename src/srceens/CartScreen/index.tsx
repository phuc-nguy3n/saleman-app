import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {Colors} from '../../config/const';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';

const CartScreen = () => {
  return (
    <View style={[globalStyles.bgWhite, {flex: 1}]}>
      {/* Search */}
      <View style={styles.searhBar}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={24}
            color="#8F8F8F"
            style={styles.searchIcon}
          />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>

      {/* Orders */}
      <View style={{marginTop: 8}}>
        {/* Item */}

        {Array.from({length: 3}, (_, index) => (
          <View
            key={index}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              flexDirection: 'row',
              gap: 16,
              alignContent: 'center',
            }}>
            {/* Image product */}
            <Image
              source={{
                uri: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f546c01fff774735848196225649f7b7_9366/Giay_Chay_Bo_Supernova_Comfortglide_mau_xanh_la_IH0897_01_00_standard.jpg',
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                borderColor: Colors.line,
                borderWidth: 1,
              }}
            />

            {/* Info product */}
            <View style={{flexShrink: 1, width: '100%'}}>
              <Text
                style={[
                  globalStyles.fontWeightMedium,
                  globalStyles.fontSmall,
                  {marginBottom: 4},
                ]}>
                Jordan Why Not? Zer0.4 'Family' PF
              </Text>
              <Text
                style={[
                  globalStyles.fontWeightRegular,
                  globalStyles.textSecondColor,
                  {fontSize: 14, marginBottom: 8},
                ]}>
                4,000,000đ
              </Text>

              {/* Actions */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.container}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.count}>1</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>+</Text>
                  </TouchableOpacity>
                </View>

                <Button
                  icon="trash-can-outline"
                  mode="text"
                  textColor={'black'}
                  onPress={() => console.log('Xóa')}>
                  <Text style={[globalStyles.fontWeightLight, {fontSize: 10}]}>
                    Xóa
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Note */}
      <View style={{paddingHorizontal: 16, paddingVertical: 8, gap: 8}}>
        <Text style={[globalStyles.fontWeightMedium, {fontSize: 14}]}>
          Ghi chú
        </Text>

        <TextInput
          style={[
            globalStyles.fontWeightLight,
            globalStyles.fontSmall,
            {
              borderColor: Colors.outline,
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 8,
            },
          ]}
          placeholder="Nhập nội dung ghi chú"
        />
        <Text style={[globalStyles.fontWeightLight, globalStyles.fontSmall]}>
          Vui lòng gọi điện trước khi giao hàng
        </Text>
      </View>

      {/* Bill */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1,
        }}>
        <View
          style={{
            width: '100%',
            minHeight: 224,
            paddingHorizontal: 16,
            boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
          }}>
          {/* Totals */}
          <View>
            <View
              style={{
                paddingVertical: 8,
                borderBottomColor: Colors.line,
                borderBottomWidth: 1,
                gap: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                  ]}>
                  Tổng số lượng sản phẩm
                </Text>

                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                  ]}>
                  4
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                  ]}>
                  Tạm tính
                </Text>
                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                  ]}>
                  12.000.000đ
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                  ]}>
                  Thuế VAT
                </Text>
                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                  ]}>
                  10.000đ
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                  ]}>
                  Chiết khấu
                </Text>
                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                  ]}>
                  0đ
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <Text
                style={[
                  globalStyles.fontWeightMedium,
                  globalStyles.primaryColor,
                  {fontSize: 14},
                ]}>
                Tổng thanh toán
              </Text>
              <Text
                style={[
                  globalStyles.fontWeightMedium,
                  globalStyles.primaryColor,
                  {fontSize: 14},
                ]}>
                12.010.000đ
              </Text>
            </View>
          </View>

          {/* Action */}
          <View style={{marginVertical: 8}}>
            <Button
              style={[globalStyles.bgPrimary, {borderRadius: 8}]}
              mode="contained"
              onPress={() => console.log('Đặt hàng')}>
              Đặt hàng
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
