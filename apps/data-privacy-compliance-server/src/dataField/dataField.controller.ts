import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataFieldService } from "./dataField.service";
import { DataFieldControllerBase } from "./base/dataField.controller.base";

@swagger.ApiTags("dataFields")
@common.Controller("dataFields")
export class DataFieldController extends DataFieldControllerBase {
  constructor(protected readonly service: DataFieldService) {
    super(service);
  }
}
