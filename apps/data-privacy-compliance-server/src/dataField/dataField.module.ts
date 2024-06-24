import { Module } from "@nestjs/common";
import { DataFieldModuleBase } from "./base/dataField.module.base";
import { DataFieldService } from "./dataField.service";
import { DataFieldController } from "./dataField.controller";
import { DataFieldResolver } from "./dataField.resolver";

@Module({
  imports: [DataFieldModuleBase],
  controllers: [DataFieldController],
  providers: [DataFieldService, DataFieldResolver],
  exports: [DataFieldService],
})
export class DataFieldModule {}
