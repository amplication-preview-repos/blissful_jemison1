import { DataRequestUserWhereInput } from "./DataRequestUserWhereInput";
import { DataRequestUserOrderByInput } from "./DataRequestUserOrderByInput";

export type DataRequestUserFindManyArgs = {
  where?: DataRequestUserWhereInput;
  orderBy?: Array<DataRequestUserOrderByInput>;
  skip?: number;
  take?: number;
};
