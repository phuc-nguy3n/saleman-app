import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {Product, RootStackParamList, ScreenType} from '../../../types';
import {useBottomSheet} from '../../../provider/BottomSheetProvider';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from '../styles';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {Image} from 'react-native';
import {shoppingBlackBag} from '../../../assets/images';
import globalStyles from '../../../styles/globalStyles';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartComponent from '../../CartScreen/components/CartComponent';

const ProductItem = ({
  product,
  navigateToScreen,
}: {
  product: Product;
  navigateToScreen: () => void;
}) => {
  return (
    <View style={styles.productsItem}>
      <TouchableOpacity onPress={navigateToScreen}>
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

function ProductDetailsComponents({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  const {isOpen} = useBottomSheet();

  const [layout, setLayout] = useState(ScreenType.productDetails);

  const navigateToScreen = (screen: string) => {
    switch (screen) {
      case ScreenType.shopping:
        navigation.navigate(ScreenType.shopping);
        break;
      case ScreenType.products:
        navigation.navigate(ScreenType.products);
        break;
      case ScreenType.productDetails:
        navigation.navigate(ScreenType.productDetails);
        break;
      case ScreenType.cart:
        if (isOpen) {
          setLayout(ScreenType.cart);
        } else {
          navigation.navigate(ScreenType.cart);
        }
        break;
      default:
        navigation.navigate(ScreenType.shopping);
    }
  };

  const itemsbreadcrumbs = [
    {
      label: 'Danh mục',
      navigation: () => null,
    },
    {label: 'Sale', navigation: () => null},
    {label: 'Shoes', navigation: () => null},
    {
      label: 'Adidas',
      navigation: () => null,
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
    <>
      {layout === ScreenType.productDetails && (
        <View style={globalStyles.bgWhite}>
          <FlatList
            ListHeaderComponent={renderHeader}
            data={products}
            renderItem={({item}) => (
              <ProductItem
                product={item}
                navigateToScreen={() => navigateToScreen(ScreenType.cart)}
              />
            )}
            keyExtractor={item => item.code.toString()}
            numColumns={2}
            removeClippedSubviews={false}
            columnWrapperStyle={[globalStyles.mh8, globalStyles.container]}
            style={{paddingBottom: 50}}
          />
        </View>
      )}

      {layout === ScreenType.cart && <CartComponent navigation={navigation} />}
    </>
  );
}

export default ProductDetailsComponents;
