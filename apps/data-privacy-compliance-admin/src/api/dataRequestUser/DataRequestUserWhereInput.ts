import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DataRequestUserWhereInput = {
  company?: CompanyListRelationFilter;
  companyLookup?: StringNullableFilter;
  companyRelation?: StringNullableFilter;
  createdDateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  requestCreatedAt?: DateTimeNullableFilter;
  requestStatus?: "Option1";
  statusOptionSet?: "Option1";
  userLookup?: StringNullableFilter;
  userRelation?: StringNullableFilter;
};
