import styles from './styles';
import {Colors, MsgError} from '../../config/const';
import {eye, eyeOff, logo} from '../../assets/images';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {
  LoginScreenProps,
  OutputValudationType,
  ValidationType,
} from '../../types';
import data from '../../db/mockData.json';
import {useLogin} from '../../hooks/useLogin';
import globalStyles from '../../styles/globalStyles';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const userList = data.user;
  const {loginCustom} = useLogin();

  const [code, setCode] = useState('D1312');
  const [phoneNumber, setPhoneNumber] = useState('0989878411');
  const [password, setPassword] = useState('123456');

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

    if (validation?.status) {
      const userData = validation?.data;

      loginCustom(userData);
      navigation.navigate('Home');
    }
  };

  // Kiểm tra thông tin đăng nhập
  const validate = (
    userInput: ValidationType,
  ): OutputValudationType | undefined => {
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
      return {status: false, data: {}};
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
        return {status: false, data: {}};
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
            return {status: false, data: {}};
          } else {
            setErrorFileds(prev => ({
              ...prev,
              password: false,
            }));
            setErrorMessage(prev => ({
              ...prev,
              password: '',
            }));
            return {status: true, data: user};
          }
        }
      }
    }
  };

  const buttonStatus = (): string => {
    return disableLogin ? Colors.disable : Colors.primary;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, globalStyles.bgWhite]}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>

        {/* Body */}
        <View style={styles.body}>
          <Text
            style={[
              styles.titleBody,
              globalStyles.primaryColor,
              globalStyles.fontWeightMedium,
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
                theme={colors.ThemeTextInput}
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
                theme={colors.ThemeTextInput}
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
                theme={colors.ThemeTextInput}
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
          <View style={styles.footerBox}>
            <Text
              style={[
                styles.footerContent,
                globalStyles.primaryColor,
                globalStyles.fontMedium,
                globalStyles.fontWeightMedium,
              ]}>
              Quên mật khẩu
            </Text>
          </View>

          <Button
            style={[
              styles.button,
              {
                backgroundColor: buttonStatus(),
              },
            ]}
            mode="contained"
            onPress={handleLogin}
            disabled={disableLogin}>
            Đăng nhập
          </Button>

          <View style={{marginTop: 12}}>
            <Text
              style={[
                globalStyles.primaryColor,
                globalStyles.fontWeightRegular,
                globalStyles.fontMedium,
              ]}>
              Đăng ký trở thành nhân viên bán hàng với Megasop ?{' '}
              <TouchableOpacity
                onPress={() => {
                  console.log('Trang đăng ký');
                }}>
                <Text
                  style={[
                    globalStyles.underline,
                    globalStyles.primaryColor,
                    globalStyles.fontWeightRegular,
                    globalStyles.fontMedium,
                  ]}>
                  Đăng kí ngay
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

function ErrorTextView({text}: {readonly text: string}) {
  return (
    <View>
      <Text style={globalStyles.errorColor}>{text}</Text>
    </View>
  );
}

export default LoginScreen;
