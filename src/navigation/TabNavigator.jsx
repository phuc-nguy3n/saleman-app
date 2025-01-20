/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ReportScreen from '../srceens/ReportScreen';
import HomeScreen from '../srceens/HomeScreen';
import AgencyScreen from '../srceens/AgencyScreen';
import UserInfoScreen from '../srceens/UserInfoScreen';
import {Image, View} from 'react-native';
import {
  chart,
  chartActive,
  home,
  homeActive,
  store,
  storeActive,
  user,
  userActive,
} from '../assets/images';
import {Colors} from '../config/const';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Report') {
            iconName = focused ? chartActive : chart;
          } else if (route.name === 'Home') {
            iconName = focused ? homeActive : home;
          } else if (route.name === 'Agency') {
            iconName = focused ? storeActive : store;
          } else if (route.name === 'UserInfo') {
            iconName = focused ? userActive : user;
          }

          return (
            <View>
              <Image
                source={iconName}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          );
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {paddingBottom: 5, height: 60},
      })}>
      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarLabel: 'Báo Cáo',
        }}
      />
      <Tab.Screen
        name="Agency"
        component={AgencyScreen}
        options={{
          tabBarLabel: 'Đại lý',
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name="UserInfo"
        component={UserInfoScreen}
        options={{
          tabBarLabel: 'Thông tin',
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
