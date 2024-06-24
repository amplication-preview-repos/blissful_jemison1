import { DataRequestUpdateManyWithoutUsersInput } from "./DataRequestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  dataRequests?: DataRequestUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  resetToken?: string | null;
  username?: string;
};
