import { Company } from "../company/Company";
import { User } from "../user/User";

export type DataRequest = {
  company?: Company | null;
  companyRelation: string | null;
  createdAt: Date;
  id: string;
  requestCreatedAt: Date | null;
  requestStatus?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  userRelation: string | null;
};
