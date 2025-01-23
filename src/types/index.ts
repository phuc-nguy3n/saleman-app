import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

// Navigator
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};
