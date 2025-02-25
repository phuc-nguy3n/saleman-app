import React, {useState} from 'react';
import {ShoppingConst} from '../../../config/const';
import {Product, RootStackParamList, ScreenType} from '../../../types';
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
import ProductsComponents from '../../ProductsScreen/components/ProductsComponents';

const {colors} = customTheme;

const ProductItem = ({product}: {product: Product}) => {
  return (
    <View style={styles.productsItem}>
      <TouchableOpacity
        onPress={() => {
          console.log('Product detail');
        }}>
        <Image
          resizeMode="cover"
          source={{uri: product.img}}
          style={styles.productItemImage}
        />
      </TouchableOpacity>
      <Text
        style={[
          globalStyles.fontWeightRegular,
          globalStyles.fontSmall,
          {marginBottom: 4},
        ]}>
        {product.name}
      </Text>
      <View style={styles.productContentArea}>
        <Text style={[globalStyles.fontWeightMedium, {fontSize: 14}]}>
          {product.price}đ
        </Text>

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

function ShoppingComponent({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  const {isOpen} = useBottomSheet();
  const {cate} = ShoppingConst;
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [layout, setLayout] = useState(ScreenType.shopping);

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
                  onPress={navigateProducts}
                  style={styles.cateItemIconBox}>
                  {item.img !== '' ? (
                    <Image source={item.img} resizeMode="cover" />
                  ) : (
                    <Ionicons
                      name="grid-outline"
                      size={24}
                      color={colors.textSecond}
                    />
                  )}
                </TouchableOpacity>

                <Text variant="bodySmall" style={globalStyles.textSecondColor}>
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

  const navigateProducts = () => {
    if (isOpen) {
      setLayout(ScreenType.products);
    } else {
      navigation.navigate(ScreenType.products);
    }
  };
  return (
    <>
      {layout === ScreenType.shopping && (
        <View style={globalStyles.bgWhite}>
          <FlatList
            ListHeaderComponent={renderHeader}
            data={products}
            renderItem={({item}) => <ProductItem product={item} />}
            keyExtractor={item => item.code.toString()}
            numColumns={2}
            removeClippedSubviews={false}
            columnWrapperStyle={[globalStyles.mh8, globalStyles.container]}
            style={{paddingBottom: 50}}
          />
        </View>
      )}

      {layout === ScreenType.products && (
        <ProductsComponents navigation={navigation} />
      )}
    </>
  );
}

export default ShoppingComponent;
