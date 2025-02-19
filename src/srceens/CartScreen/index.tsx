import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {Colors} from '../../config/const';
import {Button, Text} from 'react-native-paper';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

const CartScreen = () => {
  return (
    <View style={[globalStyles.bgWhite, globalStyles.container]}>
      {/* Search */}
      <View style={styles.searhBar}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={24}
            color={colors.outline}
            style={styles.searchIcon}
          />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>

      {/* Orders */}
      <View style={{marginTop: 8}}>
        {/* Item */}

        {Array.from({length: 3}, (_, index) => (
          <View key={index} style={styles.itemBox}>
            {/* Image product */}
            <Image
              source={{
                uri: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f546c01fff774735848196225649f7b7_9366/Giay_Chay_Bo_Supernova_Comfortglide_mau_xanh_la_IH0897_01_00_standard.jpg',
              }}
              style={styles.itemImage}
            />

            {/* Info product */}
            <View style={styles.itemInfoBox}>
              <Text variant="labelMedium" style={{marginBottom: 4}}>
                Jordan Why Not? Zer0.4 'Family' PF
              </Text>
              <Text
                variant="bodyMedium"
                style={[globalStyles.textSecondColor, {marginBottom: 8}]}>
                4,000,000đ
              </Text>

              {/* Actions */}
              <View style={styles.actionBox}>
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
      <View style={[globalStyles.ph16, globalStyles.pv8, {gap: 8}]}>
        <Text variant="labelLarge">Ghi chú</Text>

        <TextInput
          style={[
            globalStyles.fontWeightLight,
            globalStyles.fontSmall,
            styles.noteBox,
          ]}
          placeholder="Nhập nội dung ghi chú"
        />
        <Text variant="bodySmall">Vui lòng gọi điện trước khi giao hàng</Text>
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
