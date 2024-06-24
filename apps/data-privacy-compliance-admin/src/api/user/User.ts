import { DataRequest } from "../dataRequest/DataRequest";

export type User = {
  createdAt: Date;
  dataRequests?: Array<DataRequest>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  resetToken: string | null;
  updatedAt: Date;
  username: string;
};
