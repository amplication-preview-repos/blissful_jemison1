import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DataRequestUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  companyRelation?: string | null;
  requestCreatedAt?: Date | null;
  requestStatus?: "Option1" | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  userRelation?: string | null;
};
