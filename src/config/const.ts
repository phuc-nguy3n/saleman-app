import {
  currencyActive,
  fileActive,
  kidsCate,
  menCate,
  newOrder,
  returnOrder,
  saleCate,
  shipped,
  shipping,
  storeActive,
  storeActiveCheck,
  storeAdd,
  storeLocation,
  womenCate,
} from '../assets/images';

export const Fonts = {
  HelveticaLight: 'HelveticaNeueLight',
  HelveticaRegular: 'HelveticaNeueRoman',
  HelveticaMedium: 'HelveticaNeueMedium',
  HelveticaBold: 'HelveticaNeueBold',
};

export const FontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  extraLarge: 24,
};

export const Colors = {
  primary: '#018ABE',
  second: '#B3DCEB',
  third: '#E6F3F8',
  outline: '#9AA7AA',
  line: '#F4F4F4',
  lineSecond: '#E5E5E5',
  disable: '#E3E3E3',
  error: '#EA5455',
  bgError: '#FDEEEE',
  textSecond: '#555555',
  link: '#007AFF',
  status: {
    new: '#FFD700',
    shipping: '#1E90FF',
    shipped: '#32CD32',
    return: '#FF4500',
  },
  gray: '#f4f3f4',
  darkGray: '#767577',
  green: '#00BC3C',
  greenLight: '#E5F8EB',
  yellowLight: '#F6EE94',
};

export const ThemeTextInput = {
  colors: {
    primary: Colors.outline,
    background: 'white',
  },
};

export const MsgError = {
  code: 'Mã công ty không tồn tại, vui lòng kiểm tra lại',
  phoneNumber: 'Số điện thoại không chính xác, vui lòng kiểm tra lại',
  password: 'Mật khẩu không chính xác, vui lòng kiểm tra lại',
};

export const Category = {
  order: {
    newOrder: 'Đơn mới',
    shipping: 'Đang giao',
    shipped: 'Hoàn thành',
    returnOrder: 'Trả hàng',
  },
};

export const HomeConst = {
  toDo: {
    title: {
      needToDo: 'Việc cần làm',
      progress: 'Tiến độ công việc',
    },
    items: [
      {
        icon: storeActive,
        title: 'Viếng thăm',
        unit: 'Đại lý',
      },
      {
        icon: currencyActive,
        title: 'Bán hàng',
        unit: 'Triệu',
      },
      {
        icon: fileActive,
        title: 'Số lượng ĐH',
        unit: 'Đơn',
      },
      {
        icon: storeActiveCheck,
        title: 'ĐK đại lý',
        unit: 'Đại lý',
      },
    ],
    notice: 'Cuối chính sách cần đạt KPI',
  },
  store: {
    items: [
      {
        img: storeLocation,
        text: 'Ghé thăm - Đặt hàng',
      },
      {
        img: storeAdd,
        text: 'Đăng ký đại lý mới',
      },
    ],
  },
  order: {
    items: [
      {
        img: newOrder,
        text: 'Đơn mới',
      },
      {
        img: shipping,
        text: 'Đang giao',
      },
      {
        img: shipped,
        text: 'Đã giao',
      },
      {
        img: returnOrder,
        text: 'Trả hàng',
      },
    ],
  },
};

export const ShoppingConst = {
  cate: [
    {
      img: '',
      text: 'Tất cả',
    },
    {
      img: saleCate,
      text: 'Sale',
    },
    {
      img: womenCate,
      text: 'Women',
    },
    {
      img: menCate,
      text: 'Men',
    },
    {
      img: kidsCate,
      text: 'Kids',
    },
  ],
};
