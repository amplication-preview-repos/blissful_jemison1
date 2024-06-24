import { DataRequest } from "../dataRequest/DataRequest";
import { DataRequestUser } from "../dataRequestUser/DataRequestUser";

export type Company = {
  address: string | null;
  createdAt: Date;
  dataRequests?: Array<DataRequest>;
  dataRequestUsers?: Array<DataRequestUser>;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
