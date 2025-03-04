import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BaseToast, ErrorToast} from 'react-native-toast-message';

import {BaseToastProps} from 'react-native-toast-message';
import {customTheme} from '../theme/customTheme';
import {shoppingBag} from '../assets/images';
import {Image} from 'react-native';
import {Text} from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

const {colors} = customTheme;

interface CustomToastProps {
  text1: string;
  text2: string;
}

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={[styles.base, {borderLeftColor: 'green'}]}
      contentContainerStyle={styles.content}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={[styles.base, {borderLeftColor: 'red'}]}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  customToast: ({text1}: CustomToastProps) => (
    <View style={styles.customContainer}>
      <Image style={styles.agencyActionBtnIcon} source={shoppingBag} />
      <Text variant="bodyMedium" style={globalStyles.whiteColor}>
        {text1}
      </Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  base: {
    borderLeftWidth: 5,
  },
  content: {
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 14,
    color: '#555',
  },
  customContainer: {
    flexDirection: 'row',
    backgroundColor: colors.status.shipped,
    padding: 15,
    borderRadius: 10,
    width: '92%',
    alignItems: 'center',
    gap: 8,
  },
  agencyActionBtnIcon: {
    width: 24,
    height: 24,
  },
});
