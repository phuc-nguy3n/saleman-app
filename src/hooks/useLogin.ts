import {useDispatch} from 'react-redux';
import {UserType} from '../types';
import {setUser} from '../redux/slices/userSlice';
import {login} from '../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLogin = () => {
  const dispatch = useDispatch();

  const loginCustom = async (userInfo: UserType | {}): Promise<void> => {
    try {
      dispatch(setUser(userInfo));
      dispatch(login());

      await AsyncStorage.setItem('isAuthenticated', 'true');
      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return {loginCustom};
};
