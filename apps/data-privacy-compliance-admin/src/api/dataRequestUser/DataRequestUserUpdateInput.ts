import { CompanyUpdateManyWithoutDataRequestUsersInput } from "./CompanyUpdateManyWithoutDataRequestUsersInput";

export type DataRequestUserUpdateInput = {
  company?: CompanyUpdateManyWithoutDataRequestUsersInput;
  companyLookup?: string | null;
  companyRelation?: string | null;
  createdDateTime?: Date | null;
  requestCreatedAt?: Date | null;
  requestStatus?: "Option1" | null;
  statusOptionSet?: "Option1" | null;
  userLookup?: string | null;
  userRelation?: string | null;
};
