import * as graphql from "@nestjs/graphql";
import { DataFieldResolverBase } from "./base/dataField.resolver.base";
import { DataField } from "./base/DataField";
import { DataFieldService } from "./dataField.service";

@graphql.Resolver(() => DataField)
export class DataFieldResolver extends DataFieldResolverBase {
  constructor(protected readonly service: DataFieldService) {
    super(service);
  }
}
