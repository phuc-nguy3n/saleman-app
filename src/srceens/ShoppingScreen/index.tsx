import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {bannerOne} from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {shoppingBag} from '../../assets/images';
import globalStyles from '../../styles/globalStyles';
import {Colors, ShoppingPropsConst} from '../../config/const';
import {Product} from '../../types';
import styles from './styles';

const ProductItem = ({product}: {product: Product}) => {
  return (
    <View style={styles.productsItem}>
      <Image
        resizeMode="cover"
        source={{uri: product.img}}
        style={styles.productItemImage}
      />
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

const ShoppingScreen = () => {
  const {cate} = ShoppingPropsConst;

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
          <Text style={[globalStyles.fontWeightMedium, {fontSize: 14}]}>
            Danh mục sản phẩm
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 16}}>
          <View style={styles.cateBox}>
            <View style={styles.cateItem}>
              <TouchableOpacity style={styles.cateItemIconBox}>
                <Ionicons
                  name="grid-outline"
                  size={24}
                  color={Colors.textSecond}
                />
              </TouchableOpacity>

              <Text
                style={[
                  globalStyles.textSecondColor,
                  globalStyles.fontSmall,
                  globalStyles.fontWeightRegular,
                ]}>
                Tất cả
              </Text>
            </View>

            {cate.map((item, index) => (
              <View key={index} style={styles.cateItem}>
                <TouchableOpacity style={styles.cateItemIconBox}>
                  <Image source={item.img} resizeMode="cover" />
                </TouchableOpacity>

                <Text
                  style={[
                    globalStyles.textSecondColor,
                    globalStyles.fontSmall,
                    globalStyles.fontWeightRegular,
                  ]}>
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Best selling products */}
      <View style={{paddingHorizontal: 16}}>
        <View style={[styles.productTitleBox, {marginBottom: 12}]}>
          <Text style={[globalStyles.fontWeightMedium, {fontSize: 14}]}>
            Sản phẩm bán chạy
          </Text>

          <TouchableOpacity>
            <Text
              style={[
                globalStyles.primaryColor,
                globalStyles.fontSmall,
                globalStyles.fontWeightRegular,
              ]}>
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  return (
    <View style={globalStyles.bgWhite}>
      <View>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={products}
          renderItem={({item}) => <ProductItem product={item} />}
          keyExtractor={item => item.code.toString()}
          numColumns={2}
          removeClippedSubviews={false}
          columnWrapperStyle={{
            flex: 1,
            marginHorizontal: 8,
          }}
        />
      </View>
    </View>
  );
};

export default ShoppingScreen;
