import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataRequestList } from "./dataRequest/DataRequestList";
import { DataRequestCreate } from "./dataRequest/DataRequestCreate";
import { DataRequestEdit } from "./dataRequest/DataRequestEdit";
import { DataRequestShow } from "./dataRequest/DataRequestShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { DataFieldList } from "./dataField/DataFieldList";
import { DataFieldCreate } from "./dataField/DataFieldCreate";
import { DataFieldEdit } from "./dataField/DataFieldEdit";
import { DataFieldShow } from "./dataField/DataFieldShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DataRequestUserList } from "./dataRequestUser/DataRequestUserList";
import { DataRequestUserCreate } from "./dataRequestUser/DataRequestUserCreate";
import { DataRequestUserEdit } from "./dataRequestUser/DataRequestUserEdit";
import { DataRequestUserShow } from "./dataRequestUser/DataRequestUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DataPrivacyCompliance"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataRequest"
          list={DataRequestList}
          edit={DataRequestEdit}
          create={DataRequestCreate}
          show={DataRequestShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="DataField"
          list={DataFieldList}
          edit={DataFieldEdit}
          create={DataFieldCreate}
          show={DataFieldShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="DataRequestUser"
          list={DataRequestUserList}
          edit={DataRequestUserEdit}
          create={DataRequestUserCreate}
          show={DataRequestUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
