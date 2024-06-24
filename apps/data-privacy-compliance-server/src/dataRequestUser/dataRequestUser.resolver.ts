import * as graphql from "@nestjs/graphql";
import { DataRequestUserResolverBase } from "./base/dataRequestUser.resolver.base";
import { DataRequestUser } from "./base/DataRequestUser";
import { DataRequestUserService } from "./dataRequestUser.service";

@graphql.Resolver(() => DataRequestUser)
export class DataRequestUserResolver extends DataRequestUserResolverBase {
  constructor(protected readonly service: DataRequestUserService) {
    super(service);
  }
}
