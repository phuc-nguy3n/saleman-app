/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../srceens/LoginScreen';
import AuthScreen from '../srceens/AuthScreen';
import AppNavigator from './AppNavigator';
import OrderMgmtScreen from '../srceens/OrderMgmtScreen';
import OrderDetailsScreen from '../srceens/OrderDetailsScreen';
import WorkScheduleScreen from '../srceens/WorkScheduleScreen';
import {RootStackParamList} from '../types';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AgencyCheckinScreen from '../srceens/AgencyCheckinScreen';
import ShoppingScreen from '../srceens/ShoppingScreen';
import ProductScreen from '../srceens/ProductScreen';
import ProducDetailsScreen from '../srceens/ProductDetailsScreen';
import CartScreen from '../srceens/CartScreen';
import {Host} from 'react-native-portalize';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 500,
              fontSize: 14,
            },
            headerShadowVisible: false,
          }}>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Home" component={AppNavigator} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="OrderManagement"
            component={OrderMgmtScreen}
            options={{headerShown: true, title: 'Quản lý đơn hàng'}}
          />
          <Stack.Screen
            name="OrderDetails"
            component={OrderDetailsScreen}
            options={{headerShown: true, title: 'Chi tiết đơn hàng'}}
          />
          <Stack.Screen
            name="WorkSchedule"
            component={WorkScheduleScreen}
            options={{
              headerShown: true,
              title: 'Lịch làm việc',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => console.log('Search icon pressed')}>
                  <Ionicons name="search-outline" size={20} color="black" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="AgencyInfo"
            component={AgencyCheckinScreen}
            options={{headerShown: true, title: 'Danh sách Đại lý'}}
          />

          <Stack.Screen
            name="Shopping"
            component={ShoppingScreen}
            options={{headerShown: true, title: 'Mua hàng'}}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{headerShown: true, title: 'Mua hàng'}}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProducDetailsScreen}
            options={{headerShown: true, title: 'Mua hàng'}}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{headerShown: true, title: 'Giỏ hàng của bạn'}}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
}

export default AppNavigation;
