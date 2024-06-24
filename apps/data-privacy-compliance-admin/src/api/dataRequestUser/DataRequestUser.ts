import { Company } from "../company/Company";

export type DataRequestUser = {
  company?: Array<Company>;
  companyLookup: string | null;
  companyRelation: string | null;
  createdAt: Date;
  createdDateTime: Date | null;
  id: string;
  requestCreatedAt: Date | null;
  requestStatus?: "Option1" | null;
  statusOptionSet?: "Option1" | null;
  updatedAt: Date;
  userLookup: string | null;
  userRelation: string | null;
};
