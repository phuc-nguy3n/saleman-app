import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

// Navigator
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  OrderManagement: undefined;
};

type AppNavigationProp<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>;

// Props
export type LoginScreenProps = {
  navigation: AppNavigationProp<'Login'>;
};

export type HomeScreenProps = {
  navigation: AppNavigationProp<'Home'>;
};

export type OrderStatusItemProps = {
  img: ImageSourcePropType;
  title: string;
  quantity: number | string;
};

// Data
export type ValidationType = {
  code: string;
  phoneNumber: string;
  password: string;
};

export type UserType = {
  code: string;
  phoneNumber: string;
  name: string;
  todoList: {
    storesToVisit: number;
    salesAmount: number;
    orderCount: number;
    registeredAgents: number;
  };
};

export type OutputValudationType = {
  status: boolean;
  data: UserType | {};
};
