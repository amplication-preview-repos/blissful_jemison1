import { SortOrder } from "../../util/SortOrder";

export type DataRequestUserOrderByInput = {
  companyLookup?: SortOrder;
  companyRelation?: SortOrder;
  createdAt?: SortOrder;
  createdDateTime?: SortOrder;
  id?: SortOrder;
  requestCreatedAt?: SortOrder;
  requestStatus?: SortOrder;
  statusOptionSet?: SortOrder;
  updatedAt?: SortOrder;
  userLookup?: SortOrder;
  userRelation?: SortOrder;
};
