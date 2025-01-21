import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../../redux/slices/userSlice';
import {UserType} from '../../types';

function AuthScreen() {
  const navigation: any = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthState = async () => {
      const isAuthenticated: string | null = await AsyncStorage.getItem(
        'isAuthenticated',
      );

      const data: string | null = await AsyncStorage.getItem('user');

      if (isAuthenticated) {
        if (data) {
          const user: UserType = JSON.parse(data);

          dispatch(login());
          dispatch(setUser(user));
          navigation.replace('AppNavigator');
        }
      } else {
        navigation.replace('Login');
      }
    };

    checkAuthState();
  }, [dispatch, navigation]);

  return null;
}

export default AuthScreen;
