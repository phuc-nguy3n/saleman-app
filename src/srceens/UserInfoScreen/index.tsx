import React from 'react';
import {Image, ImageBackground, View, Pressable} from 'react-native';
import {
  avatar,
  headerBg,
  logout,
  passcodeLock,
  promotion,
} from '../../assets/images';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button, Text} from 'react-native-paper';
import {useLogout} from '../../hooks/useLogout';
import globalStyles from '../../styles/globalStyles';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

function UserInfoScreen() {
  const {handleLogout} = useLogout();

  return (
    <View style={[styles.bgScreen, globalStyles.bgWhite]}>
      {/* Header */}
      <ImageBackground
        source={headerBg}
        resizeMode="cover"
        style={styles.bgImg}>
        <View style={[styles.headerBox, globalStyles.ph16]}>
          <View style={styles.imgBox}>
            <Image style={styles.img} source={avatar} />
          </View>

          <View>
            <Text variant="bodyMedium">Nguyễn Nhân</Text>
            <Text variant="bodyMedium">IPI56468</Text>
            <Text
              variant="bodySmall"
              style={{
                color: colors.textSecond,
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
              <Text variant="bodyMedium" style={[{color: colors.textSecond}]}>
                Thay đổi mật khẩu
              </Text>
            </View>

            <FontAwesome
              size={14}
              color={colors.textSecond}
              name={'chevron-right'}
            />
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => console.log('Chính sách bán hàng')}>
            <View style={styles.buttonWrapperLeft}>
              <Image source={promotion} />
              <Text variant="bodyMedium" style={[{color: colors.textSecond}]}>
                Chính sách bán hàng
              </Text>
            </View>

            <FontAwesome
              size={14}
              color={colors.textSecond}
              name={'chevron-right'}
            />
          </Pressable>
        </View>

        <View style={[globalStyles.mh16, {marginBottom: 16}]}>
          <Button
            style={{
              borderRadius: 8,
              borderColor: colors.primary,
            }}
            textColor={colors.primary}
            mode="outlined"
            icon={logout}
            onPress={handleLogout}>
            <Text variant="bodyMedium" style={globalStyles.fontWeightMedium}>
              Đăng xuất
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

export default UserInfoScreen;
