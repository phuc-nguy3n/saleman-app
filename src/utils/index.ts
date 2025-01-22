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
