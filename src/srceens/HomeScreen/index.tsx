/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, Image, ScrollView} from 'react-native';

import styles from './styles';
import {avatar, ellipse} from '../../assets/images';
import {FontSizes} from '../../config/const';

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBox}>
        <Image style={styles.headerBackground} source={ellipse} />
        <View style={styles.headerContentBox}>
          <View>
            <Text
              style={{
                fontSize: FontSizes.medium,
                color: 'white',
              }}>
              Xin chào,
            </Text>
            <Text
              style={{
                fontSize: FontSizes.large,
                color: 'white',
                fontWeight: '500',
              }}>
              Nguyễn Trần Văn Hân Hoàng
            </Text>
          </View>

          <View>
            <Image style={styles.avatar} source={avatar} />
          </View>
        </View>
      </View>

      {/* Component 1 */}
      <ScrollView
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          marginTop: 100,
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}>
        {Array.from({length: 50}, (_, index) => (
          <Text key={index} style={styles.item}>
            Item {index + 1}
          </Text>
        ))}
        <View style={{paddingTop: 120}}></View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
