import { DataRequestCreateNestedManyWithoutUsersInput } from "./DataRequestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  dataRequests?: DataRequestCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  resetToken?: string | null;
  username: string;
};
