import React from 'react';
import {useBottomSheet} from '../../../provider/BottomSheetProvider';
import {Product, RootStackParamList, ScreenType} from '../../../types';
import {ShoppingConst} from '../../../config/const';
import styles from '../styles';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {customTheme} from '../../../theme/customTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {shoppingBlackBag} from '../../../assets/images';
import {Image} from 'react-native';
import globalStyles from '../../../styles/globalStyles';
import {Text} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {formatPrice} from '../../../utils';

const {colors} = customTheme;

const ProductItem = ({
  product,
  navigateProductDetails,
}: {
  product: Product;
  isBottomSheet: boolean;
  navigateProductDetails: () => void;
}) => {
  const {setProduct} = useBottomSheet();
  return (
    <View style={styles.productsItem}>
      <TouchableOpacity
        onPress={() => {
          navigateProductDetails();
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

function ProductsComponents({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  const {isOpen, setContent} = useBottomSheet();

  const products: Product[] = [
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
    },
    {
      code: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a953806c287401884d6800a3f0d8340_9366/Giay_Adizero_Boston_12_trang_JQ2552_01_00_standard.jpg',
      name: 'Jordan Why Not? Zer0.4 "Family" PF',
      price: 100000,
    },
  ];
  const {cate} = ShoppingConst;

  const renderHeader = () => (
    <>
      {/* Header */}
      <View style={styles.header}>
        {/* Breadcrumbs */}

        <TouchableOpacity
          onPress={navigateToShopping}
          style={[globalStyles.ph4]}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={colors.textSecond}
          />
        </TouchableOpacity>

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
          style={globalStyles.ph16}>
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
                          variant="bodySmall"
                          style={globalStyles.textSecondColor}>
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
                        color={colors.textSecond}
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

  const navigateToShopping = () => {
    if (isOpen) {
      setContent(ScreenType.shopping);
    } else {
      navigation.navigate(ScreenType.shopping);
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
    <View style={[globalStyles.bgWhite]}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={products}
        renderItem={({item}) => (
          <ProductItem
            product={item}
            isBottomSheet={isOpen}
            navigateProductDetails={navigateProductDetails}
          />
        )}
        keyExtractor={item => item.code.toString()}
        numColumns={2}
        removeClippedSubviews={false}
        columnWrapperStyle={[{}, globalStyles.ph8, globalStyles.container]}
        style={{paddingBottom: 50}}
      />
    </View>
  );
}

export default ProductsComponents;
