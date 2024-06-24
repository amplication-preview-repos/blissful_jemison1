import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";

export const DataRequestUserCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="company"
          reference="Company"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyTitle} />
        </ReferenceArrayInput>
        <TextInput label="companyLookup" source="companyLookup" />
        <TextInput label="companyRelation" source="companyRelation" />
        <DateTimeInput label="createdDateTime" source="createdDateTime" />
        <DateTimeInput label="requestCreatedAt" source="requestCreatedAt" />
        <SelectInput
          source="requestStatus"
          label="requestStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="statusOptionSet"
          label="statusOptionSet"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="userLookup" source="userLookup" />
        <TextInput label="userRelation" source="userRelation" />
      </SimpleForm>
    </Create>
  );
};
