import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {Colors} from '../../config/const';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';

const CartScreen = () => {
  const [count, setCount] = useState(1);
  return (
    <View style={globalStyles.bgWhite}>
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

      {/* Orders */}
      <View style={{marginTop: 8}}>
        {/* Item */}
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            flexDirection: 'row',
            gap: 16,
            alignContent: 'center',
          }}>
          {/* Image product */}
          <Image
            source={{
              uri: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f546c01fff774735848196225649f7b7_9366/Giay_Chay_Bo_Supernova_Comfortglide_mau_xanh_la_IH0897_01_00_standard.jpg',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 8,
              borderColor: Colors.line,
              borderWidth: 1,
            }}
          />

          {/* Info product */}
          <View style={{flexShrink: 1, width: '100%'}}>
            <Text
              style={[
                globalStyles.fontWeightMedium,
                globalStyles.fontSmall,
                {marginBottom: 4},
              ]}>
              Jordan Why Not? Zer0.4 'Family' PF
            </Text>
            <Text
              style={[
                globalStyles.fontWeightRegular,
                globalStyles.textSecondColor,
                {fontSize: 14, marginBottom: 8},
              ]}>
              4,000,000đ
            </Text>

            {/* Actions */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setCount(count - 1)}>
                  <Text style={styles.text}>−</Text>
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setCount(count + 1)}>
                  <Text style={styles.text}>+</Text>
                </TouchableOpacity>
              </View>

              <Button
                icon="trash-can-outline"
                mode="text"
                textColor={'black'}
                onPress={() => console.log('Xóa')}>
                Xóa
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
