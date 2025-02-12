import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import {Product, RootStackParamList} from '../../types';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Colors, ShoppingConst} from '../../config/const';
import {shoppingBlackBag} from '../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';

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

const ProductScreen = () => {
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
  const {cate} = ShoppingConst;

  const renderHeader = () => (
    <>
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
          <Image source={shoppingBlackBag} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>

      {/* Product categories */}
      <View style={styles.cateContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 16}}>
          <View style={styles.cateBox}>
            {cate.map((item, index) => (
              <View key={index} style={styles.cateItem}>
                <TouchableOpacity style={styles.cateItemIconBox}>
                  {item.img !== '' ? (
                    <>
                      <Image
                        style={{
                          width: 56,
                          height: 56,
                        }}
                        source={item.img}
                        resizeMode="cover"
                      />
                      <View style={{padding: 8, paddingRight: 12}}>
                        <Text
                          style={[
                            globalStyles.textSecondColor,
                            globalStyles.fontSmall,
                            globalStyles.fontWeightRegular,
                          ]}>
                          {item.text}
                        </Text>
                      </View>
                    </>
                  ) : (
                    <View
                      style={{
                        width: 56,
                        height: 56,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Ionicons
                        name="grid-outline"
                        size={24}
                        color={Colors.textSecond}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );

  return (
    <View style={[globalStyles.bgWhite]}>
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
  );
};

export default ProductScreen;
