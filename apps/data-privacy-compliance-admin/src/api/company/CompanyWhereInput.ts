import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataRequestListRelationFilter } from "../dataRequest/DataRequestListRelationFilter";
import { DataRequestUserListRelationFilter } from "../dataRequestUser/DataRequestUserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  address?: StringNullableFilter;
  dataRequests?: DataRequestListRelationFilter;
  dataRequestUsers?: DataRequestUserListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
