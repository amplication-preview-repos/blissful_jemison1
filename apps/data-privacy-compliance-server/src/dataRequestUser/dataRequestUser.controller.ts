import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataRequestUserService } from "./dataRequestUser.service";
import { DataRequestUserControllerBase } from "./base/dataRequestUser.controller.base";

@swagger.ApiTags("dataRequestUsers")
@common.Controller("dataRequestUsers")
export class DataRequestUserController extends DataRequestUserControllerBase {
  constructor(protected readonly service: DataRequestUserService) {
    super(service);
  }
}
