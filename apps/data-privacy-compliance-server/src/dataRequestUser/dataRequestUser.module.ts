import { Module } from "@nestjs/common";
import { DataRequestUserModuleBase } from "./base/dataRequestUser.module.base";
import { DataRequestUserService } from "./dataRequestUser.service";
import { DataRequestUserController } from "./dataRequestUser.controller";
import { DataRequestUserResolver } from "./dataRequestUser.resolver";

@Module({
  imports: [DataRequestUserModuleBase],
  controllers: [DataRequestUserController],
  providers: [DataRequestUserService, DataRequestUserResolver],
  exports: [DataRequestUserService],
})
export class DataRequestUserModule {}
