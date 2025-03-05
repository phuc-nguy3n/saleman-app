import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {ProductsCart, RootStackParamList, ScreenType} from '../../../types';
import {
  Image,
  Keyboard,
  LayoutChangeEvent,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  TextInput,
} from 'react-native';
import {customTheme} from '../../../theme/customTheme';
import styles from '../styles';
import {Button, Text} from 'react-native-paper';
import globalStyles from '../../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useBottomSheet} from '../../../provider/BottomSheetProvider';
import {useSelector} from 'react-redux';
import {formatPrice} from '../../../utils';

const {colors} = customTheme;

const BillOrder = ({...props}) => {
  return (
    <View {...props}>
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

function CartComponent({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  const products = useSelector((state: any) => state.productsCart.products);

  const {isOpen, setContent} = useBottomSheet();

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

  const navigateToScreen = () => {
    if (isOpen) {
      setContent(ScreenType.productDetails);
    } else {
      navigation.navigate(ScreenType.productDetails);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[globalStyles.container, {position: 'relative'}]}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginBottom: billHeight + 24,
          }}>
          <View style={[globalStyles.bgWhite, globalStyles.container]}>
            {/* Breadcrumbs */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingVertical: 8,
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={navigateToScreen}
                style={{width: 24, height: 24, marginLeft: -12}}>
                <Ionicons
                  name="arrow-back-outline"
                  size={24}
                  color={colors.textSecond}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>

              <Text style={{marginLeft: 28}} variant="titleSmall">
                Giỏ hàng của bạn
              </Text>
            </View>
            {/* Breadcrumbs */}

            {/* Search */}
            <View style={styles.searchBar}>
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
            {!isKeyboardVisible && (
              <View style={{marginTop: 8}}>
                {/* Item */}

                {products.map((item: ProductsCart, index: string) => (
                  <View key={index} style={styles.itemBox}>
                    {/* Image product */}
                    <Image
                      source={{
                        uri: item.img,
                      }}
                      style={styles.itemImage}
                    />

                    {/* Info product */}
                    <View style={styles.itemInfoBox}>
                      <Text variant="labelMedium" style={{marginBottom: 4}}>
                        {item.name}
                      </Text>
                      <Text
                        variant="bodyMedium"
                        style={[
                          globalStyles.textSecondColor,
                          {marginBottom: 8},
                        ]}>
                        {formatPrice(item.price)}
                      </Text>

                      {/* Actions */}
                      <View style={styles.actionBox}>
                        <View style={styles.container}>
                          <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>−</Text>
                          </TouchableOpacity>
                          <Text style={styles.count}>{item.quantity}</Text>
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
            )}

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

        {/* <View style={{paddingBottom: billHeight + 16 + 300}}></View> */}

        {!isKeyboardVisible && (
          <BillOrder
            style={styles.billOrderFixed}
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
}

export default CartComponent;
