import {
  Image,
  Keyboard,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  LayoutChangeEvent,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {Button, Text} from 'react-native-paper';
import {customTheme} from '../../theme/customTheme';
import {useEffect, useRef, useState} from 'react';
import React from 'react';

const {colors} = customTheme;

const BillOrder = ({...props}) => {
  return (
    <View {...props} style={styles.billOrderFixed}>
      <View style={styles.billOrderBox}>
        {/* Totals */}
        <View>
          <View style={styles.tempPriceBox}>
            <View style={styles.tempPriceitem}>
              <Text variant="bodySmall">Tổng số lượng sản phẩm</Text>

              <Text variant="bodySmall">4</Text>
            </View>

            <View style={styles.tempPriceitem}>
              <Text variant="bodySmall">Tạm tính</Text>
              <Text variant="bodySmall">12.000.000đ</Text>
            </View>

            <View style={styles.tempPriceitem}>
              <Text variant="bodySmall">Thuế VAT</Text>
              <Text variant="bodySmall">10.000đ</Text>
            </View>

            <View style={styles.tempPriceitem}>
              <Text variant="bodySmall">Chiết khấu</Text>
              <Text variant="bodySmall">0đ</Text>
            </View>
          </View>

          <View style={[styles.tempPriceitem, globalStyles.pv8]}>
            <Text variant="labelLarge" style={globalStyles.primaryColor}>
              Tổng thanh toán
            </Text>
            <Text variant="labelLarge" style={globalStyles.primaryColor}>
              12.010.000đ
            </Text>
          </View>
        </View>

        {/* Action */}
        <View style={globalStyles.mv8}>
          <Button
            style={[globalStyles.bgPrimary, {borderRadius: 8}]}
            mode="contained"
            onPress={() => console.log('Đặt hàng')}>
            Đặt hàng
          </Button>
        </View>
      </View>
    </View>
  );
};

const CartScreen = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [billHeight, setBillHeight] = useState(0);
  const billRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingBottom: billHeight}}>
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
                        <Text
                          style={[
                            globalStyles.fontWeightLight,
                            {fontSize: 10},
                          ]}>
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
              <Text variant="bodySmall">
                Vui lòng gọi điện trước khi giao hàng
              </Text>
            </View>
          </View>
        </ScrollView>

        {!isKeyboardVisible && (
          <BillOrder
            ref={billRef}
            onLayout={(event: LayoutChangeEvent) => {
              const {height} = event.nativeEvent.layout;
              setBillHeight(height);
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CartScreen;
