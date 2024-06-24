import { DataFieldWhereInput } from "./DataFieldWhereInput";
import { DataFieldOrderByInput } from "./DataFieldOrderByInput";

export type DataFieldFindManyArgs = {
  where?: DataFieldWhereInput;
  orderBy?: Array<DataFieldOrderByInput>;
  skip?: number;
  take?: number;
};
