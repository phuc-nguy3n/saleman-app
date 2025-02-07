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

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
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

        <Stack.Screen name="Shopping" component={ShoppingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
