import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

function AuthScreen() {
  const navigation = useNavigation(); // Hook để sử dụng điều hướng
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigation.replace('Home');
    } else {
      navigation.replace('Login');
    }
  }, [isAuthenticated, navigation]);

  return null;
}

export default AuthScreen;
