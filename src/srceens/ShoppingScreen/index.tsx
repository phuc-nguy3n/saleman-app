import {
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

const ShoppingScreen = () => {
  const {cate} = ShoppingPropsConst;
  return (
    <View style={{flex: 1}}>
      <ScrollView>
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
                marginHorizontal: 12,
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
        <View>
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

        {/* Products */}
        <View></View>
      </ScrollView>
    </View>
  );
};

export default ShoppingScreen;
