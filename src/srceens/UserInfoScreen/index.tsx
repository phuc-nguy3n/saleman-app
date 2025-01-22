import React from 'react';
import {Image, ImageBackground, View, Text, Pressable} from 'react-native';
import {
  avatar,
  headerBg,
  logout,
  passcodeLock,
  promotion,
} from '../../assets/images';
import styles from './styles';
import {Colors, FontSizes} from '../../config/const';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';

function UserInfoScreen() {
  return (
    <View style={styles.bgScreen}>
      {/* Header */}
      <ImageBackground
        source={headerBg}
        resizeMode="cover"
        style={styles.bgImg}>
        <View style={styles.headerBox}>
          <View style={styles.imgBox}>
            <Image style={styles.img} source={avatar} />
          </View>

          <View>
            <Text style={styles.text}>Nguyễn Nhân</Text>
            <Text style={styles.text}>IPI56468</Text>
            <Text
              style={{
                fontSize: FontSizes.small,
                fontWeight: 300,
                color: Colors.textSecond,
              }}>
              Nguyennhan@mail.com
            </Text>
          </View>
        </View>
      </ImageBackground>

      {/* Body */}
      <View style={styles.body}>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => console.log('Thay đổi mật khẩu')}>
            <View style={styles.buttonWrapperLeft}>
              <Image source={passcodeLock} />
              <Text style={[styles.text, {color: Colors.textSecond}]}>
                Thay đổi mật khẩu
              </Text>
            </View>

            <FontAwesome
              size={14}
              color={Colors.textSecond}
              name={'chevron-right'}
            />
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => console.log('Chính sách bán hàng')}>
            <View style={styles.buttonWrapperLeft}>
              <Image source={promotion} />
              <Text style={[styles.text, {color: Colors.textSecond}]}>
                Chính sách bán hàng
              </Text>
            </View>

            <FontAwesome
              size={14}
              color={Colors.textSecond}
              name={'chevron-right'}
            />
          </Pressable>
        </View>

        <View style={{marginBottom: 16, marginHorizontal: 16}}>
          <Button
            style={{
              borderRadius: 8,
              borderColor: Colors.primary,
            }}
            textColor={Colors.primary}
            mode="outlined"
            icon={logout}
            onPress={() => console.log('Pressed')}>
            <Text style={{fontWeight: 500, fontSize: 14}}>Đăng xuất</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

export default UserInfoScreen;
