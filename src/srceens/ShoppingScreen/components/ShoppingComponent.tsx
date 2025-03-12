import React from 'react';
import {ShoppingConst} from '../../../config/const';
import {
  CateProductType,
  Product,
  RootStackParamList,
  ScreenType,
} from '../../../types';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {bannerOne, shoppingBag} from '../../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import {Image} from 'react-native';
import {Text} from 'react-native-paper';
import globalStyles from '../../../styles/globalStyles';
import {customTheme} from '../../../theme/customTheme';
import {NavigationProp} from '@react-navigation/native';
import {useBottomSheet} from '../../../provider/BottomSheetProvider';
import ProductItem from '../../../components/ProductItem';

const {colors} = customTheme;

function ShoppingComponent({
  navigation,
}: Readonly<{
  navigation: NavigationProp<RootStackParamList>;
}>) {
  const {isOpen, setContent, setCateProduct} = useBottomSheet();
  const {cate} = ShoppingConst;

  const products: Product[] = [
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
      categories: ['Sale', 'Women'],
      description:
        'Chúng tôi thiết kế giày và thiết bị của mình để giúp bạn đạt hiệu suất cao nhất, vì vậy nếu chúng không hoạt động chính xác với bạn, chúng tôi sẽ bảo hành cho bạn. bạn có thể trả lại hàng (áp dụng một số trường hợp ngoại lệ) vì bất kỳ lý do gì trong vòng 30 ngày đó. Vì vậy, hãy tiếp tục, tự tin mua sắm và tận hưởng 30 ngày dùng thử.',
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
      categories: ['Women'],
      description:
        'Chúng tôi thiết kế giày và thiết bị của mình để giúp bạn đạt hiệu suất cao nhất, vì vậy nếu chúng không hoạt động chính xác với bạn, chúng tôi sẽ bảo hành cho bạn. bạn có thể trả lại hàng (áp dụng một số trường hợp ngoại lệ) vì bất kỳ lý do gì trong vòng 30 ngày đó. Vì vậy, hãy tiếp tục, tự tin mua sắm và tận hưởng 30 ngày dùng thử.',
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
      categories: ['Men'],
      description:
        'Chúng tôi thiết kế giày và thiết bị của mình để giúp bạn đạt hiệu suất cao nhất, vì vậy nếu chúng không hoạt động chính xác với bạn, chúng tôi sẽ bảo hành cho bạn. bạn có thể trả lại hàng (áp dụng một số trường hợp ngoại lệ) vì bất kỳ lý do gì trong vòng 30 ngày đó. Vì vậy, hãy tiếp tục, tự tin mua sắm và tận hưởng 30 ngày dùng thử.',
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
      categories: ['Men'],
      description:
        'Chúng tôi thiết kế giày và thiết bị của mình để giúp bạn đạt hiệu suất cao nhất, vì vậy nếu chúng không hoạt động chính xác với bạn, chúng tôi sẽ bảo hành cho bạn. bạn có thể trả lại hàng (áp dụng một số trường hợp ngoại lệ) vì bất kỳ lý do gì trong vòng 30 ngày đó. Vì vậy, hãy tiếp tục, tự tin mua sắm và tận hưởng 30 ngày dùng thử.',
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
      categories: ['Kids'],
      description:
        'Chúng tôi thiết kế giày và thiết bị của mình để giúp bạn đạt hiệu suất cao nhất, vì vậy nếu chúng không hoạt động chính xác với bạn, chúng tôi sẽ bảo hành cho bạn. bạn có thể trả lại hàng (áp dụng một số trường hợp ngoại lệ) vì bất kỳ lý do gì trong vòng 30 ngày đó. Vì vậy, hãy tiếp tục, tự tin mua sắm và tận hưởng 30 ngày dùng thử.',
    },
  ];

  function renderHeader() {
    return (
      <>
        {/* Carousel */}
        <ImageBackground source={bannerOne} style={styles.carouselBg}>
          {/* Header */}
          <View style={styles.header}>
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

            {/* Cart */}
            <TouchableOpacity>
              <Image source={shoppingBag} style={styles.cartIcon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Product categories */}
        <View style={styles.cateContainer}>
          <View style={styles.cateTitleBox}>
            <Text variant="labelLarge">Danh mục sản phẩm</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={globalStyles.ph16}>
            <View style={styles.cateBox}>
              {cate.map((item, index) => (
                <View key={index} style={styles.cateItem}>
                  <TouchableOpacity
                    onPress={() => navigateProducts(item.text)}
                    style={styles.cateItemIconBox}>
                    {item.img !== CateProductType.all ? (
                      <Image source={item.img} resizeMode="cover" />
                    ) : (
                      <Ionicons
                        name="grid-outline"
                        size={24}
                        color={colors.textSecond}
                      />
                    )}
                  </TouchableOpacity>

                  <Text
                    variant="bodySmall"
                    style={globalStyles.textSecondColor}>
                    {item.text}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Best selling products */}
        <View style={globalStyles.ph16}>
          <View style={[styles.productTitleBox, {marginBottom: 12}]}>
            <Text variant="labelLarge">Sản phẩm bán chạy</Text>

            <TouchableOpacity>
              <Text variant="bodySmall" style={globalStyles.primaryColor}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  const navigateProducts = (cateProduct: string) => {
    if (isOpen) {
      setContent(ScreenType.products);
      setCateProduct(cateProduct);
    } else {
      navigation.navigate(ScreenType.products, {
        cateProduct: cateProduct,
      });
    }
  };

  const navigateProductDetails = () => {
    if (isOpen) {
      setContent(ScreenType.productDetails);
    } else {
      navigation.navigate(ScreenType.productDetails);
    }
  };
  return (
    <View style={globalStyles.bgWhite}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={products}
        renderItem={({item}) => (
          <ProductItem
            product={item}
            navigateToScreen={navigateProductDetails}
          />
        )}
        keyExtractor={item => item.code.toString()}
        numColumns={2}
        removeClippedSubviews={false}
        columnWrapperStyle={[globalStyles.mh8, globalStyles.container]}
        style={{paddingBottom: 50}}
      />
    </View>
  );
}

export default ShoppingComponent;
