import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';
import {RouteProp} from '@react-navigation/native';

// Navigator
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  OrderManagement: {cateOrders: string | number};
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

type OrderMgmtRouteProp = RouteProp<RootStackParamList, 'OrderManagement'>;

export type OrderMgmtScreenProps = {
  navigation: AppNavigationProp<'OrderManagement'>;
  route: OrderMgmtRouteProp;
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
  orders: [
    {
      code: string;
      orderer: string;
      phoneNumber: string;
      timestamp: string;
      address: string;
      products: [
        {
          code: string;
          name: string;
          img: string;
          price: string;
        },
      ];
      status: string;
    },
  ];
};

export type OutputValudationType = {
  status: boolean;
  data: UserType | {};
};

// Types
export enum OrderCateType {
  new = 0,
  shipping = 1,
  shipped = 2,
  return = 3,
}
