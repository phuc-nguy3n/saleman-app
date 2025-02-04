import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';
import {RouteProp} from '@react-navigation/native';

// Navigator
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  OrderManagement: {cateOrders: string | number; orders: OrderType[]};
  OrderDetails: {order: OrderType};
  WorkSchedule: undefined;
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

export type WorkScheduleProps = {
  navigation: AppNavigationProp<'WorkSchedule'>;
};

type OrderMgmtRouteProp = RouteProp<RootStackParamList, 'OrderManagement'>;

export type OrderMgmtScreenProps = {
  navigation: AppNavigationProp<'OrderManagement'>;
  route: OrderMgmtRouteProp;
};

type OrderDetailsRouteProp = RouteProp<RootStackParamList, 'OrderDetails'>;

export type OrderDetailsScreenProps = {
  navigation: AppNavigationProp<'OrderDetails'>;
  route: OrderDetailsRouteProp;
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
  orders: OrderType[];
};

export type Product = {
  code: string;
  name: string;
  img: string;
  price: string;
};

export type OrderType = {
  code: string;
  orderer: string;
  phoneNumber: string;
  timestamp: string;
  address: string;
  products: Product[];
  status: string;
  totalPrice: string;
};

export type OutputValudationType = {
  status: boolean;
  data: UserType | {};
};

// Types
export enum TodoType {
  visit = 'visit',
  sale = 'sale',
  orderCount = 'orderCount',
  register = 'register',
}

export enum OrderCateType {
  new = 'new',
  shipping = 'shipping',
  shipped = 'shipped',
  return = 'return',
}
