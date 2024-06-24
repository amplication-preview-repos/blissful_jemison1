import { DataField as TDataField } from "../api/dataField/DataField";

export const DATAFIELD_TITLE_FIELD = "id";

export const DataFieldTitle = (record: TDataField): string => {
  return record.id?.toString() || String(record.id);
};
