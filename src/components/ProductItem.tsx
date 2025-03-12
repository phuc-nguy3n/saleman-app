import React from 'react';
import {Product} from '../types';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {customTheme} from '../theme/customTheme';
import {Text} from 'react-native-paper';
import {formatPrice} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useBottomSheet} from '../provider/BottomSheetProvider';
import useCart from '../hooks/useCart';
import Toast from 'react-native-toast-message';

function ProductItem({
  product,
  navigateToScreen,
}: {
  product: Product;
  navigateToScreen: () => void;
}) {
  const {setProduct} = useBottomSheet();
  const {handleAddProductToCart} = useCart();

  const handleAddProduct = () => {
    if (product) {
      handleAddProductToCart(product);
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
    <View style={styles.productsItem}>
      <TouchableOpacity
        onPress={() => {
          navigateToScreen();
          setProduct(product);
        }}>
        <Image
          resizeMode="cover"
          source={{uri: product.img}}
          style={styles.productItemImage}
        />
      </TouchableOpacity>
      <Text variant="bodySmall" style={{marginBottom: 4}}>
        {product.name}
      </Text>
      <View style={styles.productContentArea}>
        <Text variant="labelLarge">{formatPrice(product.price)}</Text>

        <TouchableOpacity style={styles.addIconBox} onPress={handleAddProduct}>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const {colors} = customTheme;

const styles = StyleSheet.create({
  productsItem: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  productItemImage: {
    width: '100%',
    height: 165,
    marginBottom: 10,
    borderRadius: 8,
  },
  productContentArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addIconBox: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductItem;
