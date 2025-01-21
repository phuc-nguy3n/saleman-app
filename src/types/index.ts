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
