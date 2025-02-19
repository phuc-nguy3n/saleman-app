import React from 'react';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import Breadcrumbs from '../../components/Breadcrumbs';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Product, RootStackParamList, ScreenType} from '../../types';
import {Image} from 'react-native';
import {shoppingBlackBag} from '../../assets/images';
import globalStyles from '../../styles/globalStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native-paper';

const ProductItem = ({product}: {product: Product}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToProductDetail = () => {
    navigation.navigate('ProductDetails');
  };

  return (
    <View style={styles.productsItem}>
      <TouchableOpacity onPress={navigateToProductDetail}>
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
        <Text variant="labelLarge">{product.price}đ</Text>

        <TouchableOpacity
          style={styles.addIconBox}
          onPress={() => {
            console.log('Add to cart');
          }}>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProducDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToScreen = (screen: string) => {
    switch (screen) {
      case ScreenType.shopping:
        navigation.navigate(ScreenType.shopping);
        break;
      case ScreenType.product:
        navigation.navigate(ScreenType.product);
        break;
      case ScreenType.productDetails:
        navigation.navigate(ScreenType.productDetails);
        break;
      case ScreenType.cart:
        navigation.navigate(ScreenType.cart);
        break;
      default:
        navigation.navigate(ScreenType.shopping);
    }
  };

  const itemsbreadcrumbs = [
    {
      label: 'Danh mục',
      navigation: () => navigateToScreen(ScreenType.shopping),
    },
    {label: 'Sale', navigation: () => navigateToScreen(ScreenType.product)},
    {label: 'Shoes', navigation: () => null},
    {
      label: 'Adidas',
      navigation: () => navigateToScreen(ScreenType.productDetails),
    },
  ];

  const products: Product[] = [
    {
      code: '0',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: '100.000',
    },
    {
      code: '1',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: '100.000',
    },
    {
      code: '2',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: '100.000',
    },
    {
      code: '3',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: '100.000',
    },
    {
      code: '4',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: '100.000',
    },
  ];

  const renderHeader = () => (
    <>
      <ImageBackground
        source={{
          uri: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
        }}
        style={styles.carouselBg}>
        {/* Header */}

        <View style={styles.headerBox}>
          <View style={{width: '70%'}}>
            <Breadcrumbs items={itemsbreadcrumbs} />
          </View>

          <TouchableOpacity onPress={() => navigateToScreen(ScreenType.cart)}>
            <Image source={shoppingBlackBag} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={globalStyles.ph16}>
        {/* Product name */}
        <View style={globalStyles.mv8}>
          <View style={{marginBottom: 4}}>
            <Text variant="bodySmall" style={globalStyles.textSecondColor}>
              Ngành hàng cấp 1
            </Text>
          </View>

          <View>
            <Text
              variant="headlineSmall"
              style={[globalStyles.fontWeightMedium]}>
              Jordan One Take II PF
            </Text>
          </View>
        </View>

        {/*Product  Description  */}
        <View style={globalStyles.pv8}>
          <Text variant="titleSmall" style={{marginBottom: 8}}>
            Thông tin sản phẩm
          </Text>

          <Text variant="bodySmall" style={globalStyles.textSecondColor}>
            Chúng tôi thiết kế giày và thiết bị của mình để giúp bạn đạt hiệu
            suất cao nhất, vì vậy nếu chúng không hoạt động chính xác với bạn,
            chúng tôi sẽ bảo hành cho bạn. bạn có thể trả lại hàng (áp dụng một
            số trường hợp ngoại lệ) vì bất kỳ lý do gì trong vòng 30 ngày đó. Vì
            vậy, hãy tiếp tục, tự tin mua sắm và tận hưởng 30 ngày dùng thử.
          </Text>
        </View>
      </View>

      <View style={[globalStyles.ph16, globalStyles.pv8, {marginBottom: 8}]}>
        <Text variant="titleSmall">Sản phẩm nổi bật</Text>
      </View>
    </>
  );

  return (
    <View style={globalStyles.bgWhite}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={item => item.code.toString()}
        numColumns={2}
        removeClippedSubviews={false}
        columnWrapperStyle={[globalStyles.mh8, globalStyles.container]}
      />
    </View>
  );
};

export default ProducDetailsScreen;
