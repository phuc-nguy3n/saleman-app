/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../srceens/LoginScreen';
import AuthScreen from '../srceens/AuthScreen';
import AppNavigator from './AppNavigator';
import OrderMgmtScreen from '../srceens/OrderMgmtScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Home" component={AppNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OrderManagement" component={OrderMgmtScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
