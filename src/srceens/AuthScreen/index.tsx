import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../../redux/slices/userSlice';
import {RootStackParamList, UserType} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function AuthScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthState = async () => {
      const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
      const data = await AsyncStorage.getItem('user');

      if (isAuthenticated && data) {
        const user: UserType = JSON.parse(data);
        dispatch(login());
        dispatch(setUser(user));
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }

      setIsLoading(false);
    };

    checkAuthState();
  }, [dispatch, navigation]);

  if (isLoading) return null;

  return null;
}

export default AuthScreen;
