import { DataRequestCreateNestedManyWithoutCompaniesInput } from "./DataRequestCreateNestedManyWithoutCompaniesInput";
import { DataRequestUserCreateNestedManyWithoutCompaniesInput } from "./DataRequestUserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: string | null;
  dataRequests?: DataRequestCreateNestedManyWithoutCompaniesInput;
  dataRequestUsers?: DataRequestUserCreateNestedManyWithoutCompaniesInput;
  email?: string | null;
  name?: string | null;
};
