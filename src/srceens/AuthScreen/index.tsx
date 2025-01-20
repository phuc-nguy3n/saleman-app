import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AuthScreen() {
  const navigation: any = useNavigation(); // Hook để sử dụng điều hướng
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthState = async () => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const isAuthenticated: any = await AsyncStorage.getItem(
        'isAuthenticated',
      );

      if (isAuthenticated) {
        dispatch(login());
        navigation.replace('AppNavigator');
      } else {
        navigation.replace('Login');
      }
    };

    checkAuthState();
  }, [dispatch, isAuthenticated, navigation]);

  return null;
}

export default AuthScreen;
