export type ValidationType = {
  code: string;
  phoneNumber: string;
  password: string;
};

export type UserType = {
  code: string;
  phoneNumber: string;
  name: string;
};

export type OutputValudationType = {
  status: boolean;
  data: UserType | {};
};
