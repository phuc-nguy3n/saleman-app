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
        screen: 'WorkSchedule',
      },
      {
        img: storeAdd,
        text: 'Đăng ký đại lý mới',
        screen: 'NewSignUp',
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
      img: 'All',
      text: 'All',
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
