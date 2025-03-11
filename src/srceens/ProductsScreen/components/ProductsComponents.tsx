import React, {useEffect, useRef, useState} from 'react';
import {useBottomSheet} from '../../../provider/BottomSheetProvider';
import {
  CateProductType,
  Product,
  RootStackParamList,
  ScreenType,
} from '../../../types';
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

function ProductItem({
  product,
  navigateProductDetails,
}: Readonly<{
  product: Product;
  navigateProductDetails: () => void;
}>) {
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
}

function ProductsComponents({
  navigation,
}: Readonly<{
  navigation: NavigationProp<RootStackParamList>;
}>) {
  const {isOpen, setContent, cateProduct, setCateProduct} = useBottomSheet();
  const [layoutReady, setLayoutReady] = useState(false);

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

  const scrollRef = useRef<ScrollView>(null);
  const categoryRefs = useRef<any[]>([]);

  useEffect(() => {
    if (layoutReady) {
      const categories = cate.map(item => item.text);
      const index = categories.indexOf(cateProduct);
      if (index !== -1) {
        setTimeout(() => {
          categoryRefs.current[index]?.measureLayout(
            scrollRef.current as any,
            (x: number) => {
              scrollRef.current?.scrollTo({x: x - 150, animated: true});
            },
            () => {},
          );
        }, 100);
      }
    }
  }, [layoutReady, cateProduct, cate]);

  const handleCategoryPress = (index: number) => {
    setCateProduct(cate[index].text);

    categoryRefs.current[index]?.measureLayout(scrollRef.current, (x: any) => {
      scrollRef.current?.scrollTo({x: x - 150, animated: true}); // 150px để canh giữa
    });
  };

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
          onLayout={() => setLayoutReady(true)}
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          style={globalStyles.ph16}>
          <View style={styles.cateBox}>
            {cate.map((item, index) => (
              <View key={index} style={styles.cateItem}>
                <TouchableOpacity
                  key={index}
                  ref={el => (categoryRefs.current[index] = el)}
                  onPress={() => handleCategoryPress(index)}
                  style={[
                    styles.cateItemIconBox,
                    {
                      borderColor:
                        item.text === CateProductType.all ||
                        item.text === cateProduct
                          ? colors.primary
                          : colors.tertiary,
                    },
                  ]}>
                  {item.img !== CateProductType.all ? (
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
                        backgroundColor: colors.tertiary,
                      }}>
                      <Ionicons
                        name="grid-outline"
                        size={24}
                        color={colors.link}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductItem
            product={item}
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
