import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DataRequestUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DataRequestUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="companyLookup" source="companyLookup" />
        <TextField label="companyRelation" source="companyRelation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdDateTime" source="createdDateTime" />
        <TextField label="ID" source="id" />
        <TextField label="requestCreatedAt" source="requestCreatedAt" />
        <TextField label="requestStatus" source="requestStatus" />
        <TextField label="statusOptionSet" source="statusOptionSet" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userLookup" source="userLookup" />
        <TextField label="userRelation" source="userRelation" />
      </Datagrid>
    </List>
  );
};
