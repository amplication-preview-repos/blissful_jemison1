import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataRequestUserServiceBase } from "./base/dataRequestUser.service.base";

@Injectable()
export class DataRequestUserService extends DataRequestUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
