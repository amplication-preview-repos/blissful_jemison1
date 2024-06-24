import { SortOrder } from "../../util/SortOrder";

export type DataRequestOrderByInput = {
  companyId?: SortOrder;
  companyRelation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  requestCreatedAt?: SortOrder;
  requestStatus?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userRelation?: SortOrder;
};
