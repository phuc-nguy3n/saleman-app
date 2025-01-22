import React from 'react';
import {Image, ImageBackground, View, Text} from 'react-native';
import {avatar, headerBg} from '../../assets/images';
import styles from './styles';
import {FontSizes} from '../../config/const';

function UserInfoScreen() {
  return (
    <View>
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
            <Text style={{fontSize: FontSizes.small, fontWeight: 300}}>
              Nguyennhan@mail.com
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default UserInfoScreen;
