import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {clearUser} from '../redux/slices/userSlice';
import {logout} from '../redux/slices/authSlice';
import {useNavigation} from '@react-navigation/native';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const handleLogout = async (): Promise<void> => {
    try {
      dispatch(clearUser());
      dispatch(logout());
      await AsyncStorage.clear();
      navigation.replace('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return {handleLogout};
};
