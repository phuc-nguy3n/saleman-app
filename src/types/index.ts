import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

// Navigator
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

// Props
export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
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
