import {DefaultTheme} from 'react-native-paper';

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(1, 138, 190)', // màu chính
    secondary: 'rgb(179, 220, 235)', // màu bậc 2
    tertiary: 'rgb(230, 243, 248)', // màu bậc 3
    error: 'rgb(234, 84, 85)', // màu lỗi
    errorContainer: 'rgb(253, 238, 238)', // màu nền lỗi
    background: 'rgb(251, 252, 255)', // màu nền chính
    surface: 'rgb(251, 252, 255)', // màu nền component (vd: Cart)
    surfaceDisabled: 'rgb(227, 227, 227)', // màu nền component vô hiệu hóa
    outline: 'rgb(154, 167, 170)', // màu viền (vd: Input)
    scrim: 'rgb(0, 0, 0)', // Dialog và Modal nhỏ
    backdrop: 'rgba(43, 49, 54, 0.4)', // BottomSheet hoặc Modal toàn màn hình
    shadow: 'rgba(230, 243, 248, 0.8) 0px 1px 4px', // hiệu ứng đổ bóng
    elevation: {
      // tạo chiều sâu cho shadow
      level0: 'transparent',
      level1: 'rgb(238, 244, 249)',
      level2: 'rgb(231, 240, 246)',
      level3: 'rgb(223, 235, 243)',
      level4: 'rgb(221, 234, 241)',
      level5: 'rgb(216, 231, 239)',
    },
    divider: 'rgb(244, 244, 244)', // màu phân cách
    dividerSecond: 'rgb(229,229,229)', // màu phân cách
    text: '#2A2A2A', // màu nội dung
    textSecond: 'rgb(85, 85 ,85)', // màu nội dung bậc 2
    ThemeTextInput: {
      colors: {
        primary: DefaultTheme.colors.outline,
        background: 'rgb(255, 255, 255)',
      },
    },
    gray: 'rgb(244,243,244)',
    lightGray: 'rgb(250,250,250)',
    darkGray: 'rgb(118,117,119)',
    status: {
      new: 'rgb(255,215,0)',
      shipping: 'rgb(30,144,255)',
      shipped: 'rgb(50,205,50)',
      return: 'rgb(255,69,0)',
    },
    link: 'rgb(0,122,255)',
  },
  roundness: 8, // Bo tròn góc
};
