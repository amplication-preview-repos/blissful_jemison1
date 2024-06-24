import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DataRequestUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
