import { DataRequestUser as TDataRequestUser } from "../api/dataRequestUser/DataRequestUser";

export const DATAREQUESTUSER_TITLE_FIELD = "companyLookup";

export const DataRequestUserTitle = (record: TDataRequestUser): string => {
  return record.companyLookup?.toString() || String(record.id);
};
