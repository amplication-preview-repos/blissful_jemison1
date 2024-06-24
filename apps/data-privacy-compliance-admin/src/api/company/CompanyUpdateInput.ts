import { DataRequestUpdateManyWithoutCompaniesInput } from "./DataRequestUpdateManyWithoutCompaniesInput";
import { DataRequestUserUpdateManyWithoutCompaniesInput } from "./DataRequestUserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: string | null;
  dataRequests?: DataRequestUpdateManyWithoutCompaniesInput;
  dataRequestUsers?: DataRequestUserUpdateManyWithoutCompaniesInput;
  email?: string | null;
  name?: string | null;
};
