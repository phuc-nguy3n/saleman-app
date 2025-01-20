import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';
import {Colors, FontSizes, MsgError, ThemeTextInput} from '../../config/const';
import {Button, TextInput} from 'react-native-paper';
import {ValidationType} from '../../types';
import {setUser} from '../../redux/slices/userSlice';
import {login} from '../../redux/slices/authSlice';

import {useDispatch} from 'react-redux';

import data from '../../db/mockData.json';
import {eye, eyeOff, logo} from '../../assets/images';

function LoginScreen({navigation}) {
  const userList = data.user;

  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [disableLogin, setDisableLogin] = useState(true);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const [errorFileds, setErrorFileds] = useState({
    code: false,
    phoneNumber: false,
    password: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    code: '',
    phoneNumber: '',
    password: '',
  });

  const dispatch = useDispatch();

  // Nhập đủ 3 fields nút đăng nhập sẽ nhấn được
  useEffect(() => {
    if (code && phoneNumber && password) {
      setDisableLogin(false);
    } else {
      setDisableLogin(true);
    }
  }, [code, phoneNumber, password]);

  // Nhập văn bản từ bàn phím sẽ ẩn đi trạng thái error của từng fields

  useEffect(() => {
    if (code) {
      setErrorFileds(prev => ({...prev, code: false}));
      setErrorMessage(prev => ({...prev, code: ''}));
    }
  }, [code]);

  useEffect(() => {
    if (phoneNumber) {
      setErrorFileds(prev => ({...prev, phoneNumber: false}));
      setErrorMessage(prev => ({...prev, phoneNumber: ''}));
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (password) {
      setErrorFileds(prev => ({...prev, password: false}));
      setErrorMessage(prev => ({...prev, password: ''}));
    }
  }, [password]);

  // Ẩn hiện mật khẩu
  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  // Hàm đăng nhập
  const handleLogin = () => {
    const userForm: ValidationType = {
      code: code,
      phoneNumber: phoneNumber,
      password: password,
    };

    const validation = validate(userForm);

    if (validation) {
      dispatch(setUser(userForm));
      dispatch(login());
      navigation.navigate('Home');
    }
  };

  // Kiểm tra thông tin đăng nhập
  const validate = (userInput: ValidationType) => {
    const user = userList.find(
      (userInfo: ValidationType) => userInfo.code === userInput.code,
    );

    if (!user) {
      setErrorFileds(prev => ({
        ...prev,
        code: true,
      }));
      setErrorMessage(prev => ({
        ...prev,
        code: MsgError.code,
      }));
      return false;
    } else if (user) {
      setErrorFileds(prev => ({
        ...prev,
        code: false,
      }));
      setErrorMessage(prev => ({
        ...prev,
        code: '',
      }));
      // Phone number
      if (user.phoneNumber !== userInput.phoneNumber) {
        setErrorFileds(prev => ({
          ...prev,
          phoneNumber: true,
        }));
        setErrorMessage(prev => ({
          ...prev,
          phoneNumber: MsgError.phoneNumber,
        }));
        return false;
      } else if (user.phoneNumber === userInput.phoneNumber) {
        setErrorFileds(prev => ({
          ...prev,
          phoneNumber: false,
        }));
        setErrorMessage(prev => ({
          ...prev,
          phoneNumber: '',
        }));
        // Password
        if (
          user.code === userInput.code &&
          user.phoneNumber === userInput.phoneNumber
        ) {
          if (user.password !== userInput.password) {
            setErrorFileds(prev => ({
              ...prev,
              password: true,
            }));
            setErrorMessage(prev => ({
              ...prev,
              password: MsgError.password,
            }));
            return false;
          } else {
            setErrorFileds(prev => ({
              ...prev,
              password: false,
            }));
            setErrorMessage(prev => ({
              ...prev,
              password: '',
            }));
            return true;
          }
        }
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={logo} style={styles.image} />
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
            <View>
              <TextInput
                mode="outlined"
                label="Mã công ty"
                placeholder="Nhập mã..."
                right={<TextInput.Affix />}
                theme={ThemeTextInput}
                keyboardType="default"
                onChangeText={setCode}
                value={code}
                error={errorFileds.code}
              />

              <ErrorTextView text={errorMessage.code} />
            </View>

            <View>
              <TextInput
                mode="outlined"
                label="Số điện thoại"
                placeholder="Nhập sđt..."
                right={<TextInput.Affix />}
                theme={ThemeTextInput}
                keyboardType="number-pad"
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                error={errorFileds.phoneNumber}
              />

              <ErrorTextView text={errorMessage.phoneNumber} />
            </View>

            <View>
              <TextInput
                mode="outlined"
                label="Mật khẩu"
                placeholder="Nhập mật khẩu..."
                secureTextEntry={isSecureTextEntry}
                right={
                  <TextInput.Icon
                    icon={isSecureTextEntry ? eyeOff : eye}
                    onPress={toggleSecureTextEntry}
                  />
                }
                theme={ThemeTextInput}
                onChangeText={setPassword}
                value={password}
                error={errorFileds.password}
              />

              <ErrorTextView text={errorMessage.password} />
            </View>
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
              backgroundColor: disableLogin ? Colors.disable : Colors.primary,
              marginVertical: 8,
            }}
            mode="contained"
            onPress={handleLogin}
            disabled={disableLogin}>
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

function ErrorTextView({text}: {readonly text: string}) {
  return (
    <View>
      <Text style={styles.error}>{text}</Text>
    </View>
  );
}

export default LoginScreen;
