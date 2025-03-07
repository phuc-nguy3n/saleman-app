import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  LayoutChangeEvent,
} from 'react-native';
import {Portal} from 'react-native-portalize';
import {useBottomSheet} from './BottomSheetProvider';
import {ScreenType} from '../types';
import globalStyles from '../styles/globalStyles';
import {Button, Text} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../config/customToast';
import {formatPrice} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {addProductCart} from '../redux/slices/productsCartSlice';
import {customTheme} from '../theme/customTheme';

const {colors} = customTheme;

// Định nghĩa kiểu dữ liệu của Context
interface BottomBarFixedContextType {
  isVisibleBottomBarFixed: boolean;
  showBottomBarFixed: () => void;
  hideBottomBarFixed: () => void;
}

// Tạo Context
const BottomBarFixedContext = createContext<
  BottomBarFixedContextType | undefined
>(undefined);

// Provider Component
export const BottomBarFixedProvider = ({children}: {children: ReactNode}) => {
  const products = useSelector((state: any) => state.productsCart.products);
  const dispatch = useDispatch();

  const {
    content,
    isOpen,
    setBottomBarHeight,
    product,
    isKeyboardVisible,
    overviewPrice,
  } = useBottomSheet();

  const [bottomBarFixedHeight, setBottomBarFixedHeight] = useState(0);

  const [isVisibleBottomBarFixed, setIsVisibleBottomBarFixed] =
    useState(isOpen);

  const showBottomBarFixed = useCallback(
    () => setIsVisibleBottomBarFixed(true),
    [],
  );
  const hideBottomBarFixed = useCallback(
    () => setIsVisibleBottomBarFixed(false),
    [],
  );

  useEffect(() => {
    if (!isOpen) {
      hideBottomBarFixed();
    }
  }, [isOpen, hideBottomBarFixed]);

  useEffect(() => {
    setBottomBarHeight(bottomBarFixedHeight);
  }, [bottomBarFixedHeight, setBottomBarHeight]);

  const handleAddProduct = () => {
    if (product) {
      dispatch(addProductCart({...product, quantity: 1}));
      Toast.show({
        type: 'customToast',
        text1: 'Sản phẩm đã được thêm vào giỏ hàng',
        topOffset: 20,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Sản phẩm không tồn tại',
        topOffset: 20,
      });
    }
  };

  return (
    <BottomBarFixedContext.Provider
      value={{
        isVisibleBottomBarFixed,
        showBottomBarFixed,
        hideBottomBarFixed,
      }}>
      {children}

      <Portal>
        {isVisibleBottomBarFixed && content === ScreenType.productDetails && (
          <Animated.View
            style={styles.container}
            onLayout={(event: LayoutChangeEvent) => {
              const {height} = event.nativeEvent.layout;
              setBottomBarFixedHeight(height);
            }}>
            <View style={styles.content}>
              <View style={{width: '50%'}}>
                <View style={{justifyContent: 'center'}}>
                  <View>
                    <Text variant="bodySmall">Giá bán</Text>
                  </View>
                  <View>
                    <Text style={globalStyles.errorColor} variant="titleMedium">
                      {formatPrice(product?.price ?? 0)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{width: '50%'}}>
                <TouchableOpacity
                  onPress={handleAddProduct}
                  style={[styles.button, globalStyles.bgPrimary]}>
                  <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        )}
        {isVisibleBottomBarFixed &&
          content === ScreenType.cart &&
          !isKeyboardVisible &&
          products.length > 0 && (
            <View
              style={styles.billOrderFixed}
              onLayout={(event: LayoutChangeEvent) => {
                const {height} = event.nativeEvent.layout;
                setBottomBarFixedHeight(height);
              }}>
              <View style={styles.billOrderBox}>
                {/* Totals */}
                <View>
                  <View style={styles.tempPriceBox}>
                    <View style={styles.tempPriceitem}>
                      <Text variant="bodySmall">Tổng số lượng sản phẩm</Text>

                      <Text variant="bodySmall">
                        {overviewPrice?.totalQuantity}
                      </Text>
                    </View>

                    <View style={styles.tempPriceitem}>
                      <Text variant="bodySmall">Tạm tính</Text>
                      <Text variant="bodySmall">
                        {formatPrice(overviewPrice?.tempPrice ?? 0)}
                      </Text>
                    </View>

                    <View style={styles.tempPriceitem}>
                      <Text variant="bodySmall">Thuế VAT</Text>
                      <Text variant="bodySmall">
                        {formatPrice(overviewPrice?.VATValue ?? 0)}
                      </Text>
                    </View>

                    <View style={styles.tempPriceitem}>
                      <Text variant="bodySmall">Chiết khấu</Text>
                      <Text variant="bodySmall">0đ</Text>
                    </View>
                  </View>

                  <View style={[styles.tempPriceitem, globalStyles.pv8]}>
                    <Text
                      variant="labelLarge"
                      style={globalStyles.primaryColor}>
                      Tổng thanh toán
                    </Text>
                    <Text
                      variant="labelLarge"
                      style={globalStyles.primaryColor}>
                      {formatPrice(overviewPrice?.totalPrice ?? 0)}
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
          )}
        <Toast config={toastConfig} />;
      </Portal>
    </BottomBarFixedContext.Provider>
  );
};

// Custom Hook để sử dụng Context
export const useBottomBarFixed = () => {
  const context = useContext(BottomBarFixedContext);
  if (!context) {
    throw new Error(
      'useBottomBarFixed must be used within a BottomBarFixedProvider',
    );
  }
  return context;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  billOrderFixed: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
  },
  billOrderBox: {
    width: '100%',
    minHeight: 224,
    paddingHorizontal: 16,
    boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
  },
  tempPriceBox: {
    paddingVertical: 8,
    borderBottomColor: colors.divider,
    borderBottomWidth: 1,
    gap: 8,
  },
  tempPriceitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
