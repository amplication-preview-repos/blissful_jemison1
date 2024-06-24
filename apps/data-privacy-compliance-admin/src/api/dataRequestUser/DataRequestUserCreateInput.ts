import { CompanyCreateNestedManyWithoutDataRequestUsersInput } from "./CompanyCreateNestedManyWithoutDataRequestUsersInput";

export type DataRequestUserCreateInput = {
  company?: CompanyCreateNestedManyWithoutDataRequestUsersInput;
  companyLookup?: string | null;
  companyRelation?: string | null;
  createdDateTime?: Date | null;
  requestCreatedAt?: Date | null;
  requestStatus?: "Option1" | null;
  statusOptionSet?: "Option1" | null;
  userLookup?: string | null;
  userRelation?: string | null;
};
