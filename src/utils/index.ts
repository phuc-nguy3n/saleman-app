import {customTheme} from '../theme/customTheme';

const {colors} = customTheme;

export const formatTimestamp = (
  timestamp: string,
  format: 'date' | 'time',
): string => {
  const date = new Date(timestamp);

  if (format === 'date') {
    // Định dạng ngày thành dd/MM/yyyy
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } else if (format === 'time') {
    // Định dạng giờ thành HH:mm
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  throw new Error('Invalid format type. Use "date" or "time".');
};

export const generateSalesAmount = (amount: number | string): number => {
  if (typeof amount === 'string') {
    const numericValue = parseInt(amount.replace(/\./g, ''), 10);

    if (numericValue < 100_000) {
      return 0;
    }

    return parseFloat((numericValue / 1_000_000).toFixed(1));
  }

  if (amount < 100_000) {
    return 0;
  }
  return parseFloat((amount / 1_000_000).toFixed(1));
};

export const generateOrderQuantity = (input: string | number): string => {
  const quantity: number =
    typeof input === 'string' ? parseInt(input, 10) : input;

  return quantity >= 1000 ? '999+' : quantity.toString(); // Trả về chuỗi
};

export const generateOrderStatus = (
  status: string,
): {label: string; color: string} => {
  switch (status) {
    case 'new':
      return {label: 'Đơn mới', color: colors.status.new};
    case 'shipping':
      return {label: 'Đang giao', color: colors.status.shipping};
    case 'shipped':
      return {label: 'Hoàn thành', color: colors.status.shipped};
    case 'return':
      return {label: 'Trả hàng', color: colors.status.return};
    default:
      return {label: 'Trạng thái không xác định', color: '#A9A9A9'};
  }
};

export const formatPrice = (price: string): string => {
  return price + 'đ';
};
