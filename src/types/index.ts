export type UserType = {
  code: string;
  phoneNumber: string;
};

export type ValidationType = UserType & {
  password: string;
};
