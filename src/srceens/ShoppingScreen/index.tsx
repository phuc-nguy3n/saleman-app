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

const ProductItem = ({product}: {product: Product}) => {
  return (
    <View
      style={{
        width: '50%',
        paddingHorizontal: 8,
        marginBottom: 16,
      }}>
      <Image
        resizeMode="cover"
        source={{uri: product.img}}
        style={{
          width: '100%',
          height: 165,
          marginBottom: 10,
          borderRadius: 8,
        }}
      />
      <Text
        style={[
          globalStyles.fontWeightRegular,
          globalStyles.fontSmall,
          {marginBottom: 4},
        ]}>
        {product.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={[globalStyles.fontWeightMedium, {fontSize: 14}]}>
          {product.price}đ
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 50,
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
          }}
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
      <ImageBackground
        source={bannerOne}
        style={{width: '100%', height: 232, marginBottom: 12}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 12,
            marginTop: 12,
          }}>
          {/* Search bar */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                backgroundColor: 'white',
                width: '90%',
                height: 40,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#9AA7AA',
              }}>
              <Ionicons
                name="search-outline"
                size={24}
                color="#8F8F8F"
                style={{position: 'absolute', left: 10}}
              />
              <TextInput
                style={{
                  paddingHorizontal: 10,
                  flex: 1,
                  paddingLeft: 40,
                }}
                placeholder="Search"
              />
            </View>
          </View>

          {/* Cart */}
          <TouchableOpacity>
            <Image source={shoppingBag} style={{width: 30, height: 30}} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Categories */}
      <View style={{marginBottom: 26}}>
        <View style={{marginHorizontal: 16, marginBottom: 8}}>
          <Text style={[globalStyles.fontWeightMedium, {fontSize: 14}]}>
            Danh mục sản phẩm
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 16}}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              gap: 12,
            }}>
            <View style={{alignItems: 'center', gap: 4}}>
              <TouchableOpacity
                style={{
                  boxShadow: 'rgba(230, 243, 248, 0.8) 0px 1px 4px',
                  backgroundColor: 'white',
                  borderColor: '#E6F3F8',
                  borderWidth: 1,
                  width: 56,
                  height: 56,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 16,
                  marginHorizontal: 4,
                }}>
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
              <View key={index} style={{alignItems: 'center', gap: 4}}>
                <TouchableOpacity
                  style={{
                    boxShadow: 'rgba(230, 243, 248, 0.8) 0px 1px 4px',
                    backgroundColor: 'white',
                    borderColor: '#E6F3F8',
                    borderWidth: 1,
                    width: 56,
                    height: 56,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 16,
                    marginHorizontal: 4,
                  }}>
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

      <View style={{paddingHorizontal: 16}}>
        {/* Title */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
          }}>
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
