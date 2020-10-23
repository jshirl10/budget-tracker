export type User = {
  user_id: number;
  email: string;
  first_name: string;
  passwd: string;
  unallocated_funds: string;
};

export type CreateUserPayload = Omit<User, 'user_id'>;
export type BaseUser = Omit<User, 'user_id'>;
