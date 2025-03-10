import {NavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ProductsCart, RootStackParamList, ScreenType} from '../../../types';
import {
  Image,
  Keyboard,
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
import {useDispatch, useSelector} from 'react-redux';
import {formatPrice} from '../../../utils';
import {
  removeProductCart,
  updateProductQuantity,
} from '../../../redux/slices/productsCartSlice';
import {cartEmpty} from '../../../assets/images';

const {colors} = customTheme;

function CartComponent({
  navigation,
}: Readonly<{
  navigation: NavigationProp<RootStackParamList>;
}>) {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.productsCart.products);

  const totalQuantity = products.reduce(
    (sum: number, product: ProductsCart) => sum + product.quantity,
    0,
  );

  const tempPrice = products.reduce(
    (sum: number, product: ProductsCart) =>
      sum + product.price * product.quantity,
    0,
  );

  const VATValue = 10000;

  let totalPrice = VATValue + tempPrice;

  const {
    isOpen,
    setContent,
    bottomBarHeight,
    setIsKeyboardVisible,
    setOverviewPrice,
  } = useBottomSheet();

  useEffect(() => {
    const overviewPrice = {
      totalQuantity,
      tempPrice,
      VATValue,
      totalPrice,
    };
    setOverviewPrice(overviewPrice);
  }, [setOverviewPrice, tempPrice, totalPrice, totalQuantity]);

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
  }, [setIsKeyboardVisible]);

  const navigateToScreen = () => {
    if (isOpen) {
      setContent(ScreenType.productDetails);
    } else {
      navigation.navigate(ScreenType.productDetails);
    }
  };

  const handleUpdateQuantity = (
    type: 'increase' | 'decrease',
    item: ProductsCart,
  ) => {
    const newQuantity =
      type === 'increase' ? item.quantity + 1 : item.quantity - 1;

    if (newQuantity <= 0) {
      dispatch(removeProductCart(item.code));
    } else {
      dispatch(updateProductQuantity({code: item.code, quantity: newQuantity}));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[globalStyles.container]}>
        <View
          style={{
            paddingBottom: bottomBarHeight + 24,
          }}>
          <View style={[globalStyles.bgWhite, globalStyles.container]}>
            {/* Back navigation */}(
            <View
              style={[
                styles.backNavigation,
                globalStyles.ph16,
                globalStyles.pv8,
              ]}>
              <TouchableOpacity
                onPress={navigateToScreen}
                style={styles.backIconBack}>
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
            ){/* Search */}
            {products.length > 0 && (
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
            )}
            {/* Orders */}(
            <ScrollView
              scrollEnabled
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={true}
              style={styles.ordersBox}>
              {/* Item */}
              {products.length > 0 ? (
                products.map((item: ProductsCart, index: string) => (
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
                          <TouchableOpacity
                            onPress={() =>
                              handleUpdateQuantity('decrease', item)
                            }
                            style={styles.button}>
                            <Text style={styles.text}>−</Text>
                          </TouchableOpacity>
                          <Text style={styles.count}>{item.quantity}</Text>
                          <TouchableOpacity
                            onPress={() =>
                              handleUpdateQuantity('increase', item)
                            }
                            style={styles.button}>
                            <Text style={styles.text}>+</Text>
                          </TouchableOpacity>
                        </View>

                        <Button
                          icon="trash-can-outline"
                          mode="text"
                          textColor={'black'}
                          onPress={() =>
                            dispatch(removeProductCart(item.code))
                          }>
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
                ))
              ) : (
                <Image source={cartEmpty} style={styles.orderEmpty} />
              )}
            </ScrollView>
            ){/* Note */}
            {products.length > 0 && (
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
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CartComponent;
