import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import styles from './styles';
import {Colors, FontSizes} from '../../config/const';
import {Button, TextInput} from 'react-native-paper';
import {setUser, setLoginError} from '../../redux/slices/userSlice';
import {useDispatch} from 'react-redux';
import {UserType} from '../../types';

const Logo = require('../../assets/images/logo.png');

const themeTextInput = {
  colors: {
    primary: Colors.outline,
  },
};

function LoginScreen() {
  const [code, setCode] = useState('admin@example.com');
  const [phoneNumber, setPhoneNumber] = useState('0909777666');
  const [password, setPassword] = useState('password');

  const dispatch = useDispatch();
  // const isLoginError = useSelector(state => state.user.loginError);
  // const userInfo = useSelector(state => state.user.userInfo);

  // Dùng để login
  const handleLogin = () => {
    if (
      code === 'admin@example.com' &&
      phoneNumber === '0909777666' &&
      password === 'password'
    ) {
      const userForm: UserType = {
        code: code,
        phoneNumber: phoneNumber,
      };
      dispatch(setUser(userForm));
      dispatch(setLoginError(false));

      Alert.alert('Success', 'Logged in successfully!');
    } else {
      dispatch(setLoginError(true));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={Logo} style={styles.image} />
        </View>

        {/* Body */}
        <View style={styles.body}>
          <Text
            style={[
              {
                fontSize: 18,
                marginBottom: 24,
              },
              styles.color,
              styles.medium,
            ]}>
            Đăng nhập
          </Text>

          {/* Form */}
          <View style={styles.form}>
            <TextInput
              mode="outlined"
              label="Mã công ty"
              placeholder="Nhập mã..."
              right={<TextInput.Affix />}
              theme={themeTextInput}
              keyboardType="default"
              onChangeText={setCode}
              value={code}
            />

            <TextInput
              mode="outlined"
              label="Số điện thoại"
              placeholder="Nhập sđt..."
              right={<TextInput.Affix />}
              theme={themeTextInput}
              keyboardType="number-pad"
              onChangeText={setPhoneNumber}
              value={phoneNumber}
            />

            <TextInput
              mode="outlined"
              label="Mật khẩu"
              placeholder="Nhập mật khẩu..."
              secureTextEntry={true}
              right={<TextInput.Affix />}
              theme={themeTextInput}
              onChangeText={setPassword}
              value={password}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.box}>
            <Text
              style={[
                {
                  textAlign: 'right',
                  fontSize: FontSizes.medium,
                },
                styles.medium,
                styles.color,
              ]}>
              Quên mật khẩu
            </Text>
          </View>

          <Button
            style={{
              borderRadius: 8,
              backgroundColor: Colors.primary,
              marginVertical: 8,
            }}
            mode="contained"
            onPress={handleLogin}>
            Đăng nhập
          </Button>

          <View style={{marginTop: 12}}>
            <Text
              style={[
                styles.color,
                {fontWeight: '400', fontSize: FontSizes.medium},
              ]}>
              Đăng ký trở thành nhân viên bán hàng với Megasop ?{' '}
              <Text style={styles.underline}>Đăng kí ngay</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
