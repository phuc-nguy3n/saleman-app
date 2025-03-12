import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';
import {RouteProp} from '@react-navigation/native';

// Navigator
export type RootStackParamList = {
  Auth: undefined;
  Login: undefined;
  Home: undefined;
  OrderManagement: {cateOrders: string | number; orders: OrderType[]};
  OrderDetails: {order: OrderType};
  WorkSchedule: undefined;
  AgencyInfo: {info: AgencyType};
  Shopping: undefined;
  Products: {cateProduct: string};
  ProductDetails: undefined;
  Cart: undefined;
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

export type WorkScheduleScreenProps = {
  navigation: AppNavigationProp<'WorkSchedule'>;
};

type AgencyInfoRouteProp = RouteProp<RootStackParamList, 'AgencyInfo'>;

export type AgencyInfoScreenProps = {
  navigation: AppNavigationProp<'AgencyInfo'>;
  route: AgencyInfoRouteProp;
};

export type ShoppingScreenProps = {
  navigation: AppNavigationProp<'Shopping'>;
};

type ProductsRouteProp = RouteProp<RootStackParamList, 'Products'>;

export type ProductsScreenProps = {
  navigation: AppNavigationProp<'Products'>;
  route: ProductsRouteProp;
};

export type ProductDetailsScreenProps = {
  navigation: AppNavigationProp<'ProductDetails'>;
};

export type CartScreenProps = {
  navigation: AppNavigationProp<'Cart'>;
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

// Styles
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
  price: number;
  categories: string[];
  description: string;
};

export type ProductsCart = Product & {
  quantity: number;
};

export type OverviewPrice = {
  totalQuantity: number;
  tempPrice: number;
  VATValue: number;
  totalPrice: number;
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

export type OwnerType = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
};

export type AgencyType = {
  id: string;
  name: string;
  quantityOrders: string | number;
  owner: OwnerType;
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

export enum CateProductType {
  all = 'All',
  sale = 'Sale',
  women = 'Women',
  men = 'Men',
  kids = 'Kids',
}

export enum ScreenType {
  auth = 'Auth',
  login = 'Login',
  home = 'Home',
  orderManagement = 'OrderManagement',
  orderDetails = 'OrderDetails',
  workSchedule = 'WorkSchedule',
  newSignUp = 'NewSignUp',
  agencyInfo = 'AgencyInfo',
  shopping = 'Shopping',
  products = 'Products',
  productDetails = 'ProductDetails',
  cart = 'Cart',
}
