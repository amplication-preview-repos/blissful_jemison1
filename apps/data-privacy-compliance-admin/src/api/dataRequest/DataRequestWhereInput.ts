import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DataRequestWhereInput = {
  company?: CompanyWhereUniqueInput;
  companyRelation?: StringNullableFilter;
  id?: StringFilter;
  requestCreatedAt?: DateTimeNullableFilter;
  requestStatus?: "Option1";
  status?: "Option1";
  user?: UserWhereUniqueInput;
  userRelation?: StringNullableFilter;
};
