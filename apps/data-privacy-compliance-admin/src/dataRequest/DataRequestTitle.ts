import { DataRequest as TDataRequest } from "../api/dataRequest/DataRequest";

export const DATAREQUEST_TITLE_FIELD = "companyRelation";

export const DataRequestTitle = (record: TDataRequest): string => {
  return record.companyRelation?.toString() || String(record.id);
};
