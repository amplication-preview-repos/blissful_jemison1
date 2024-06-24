import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataFieldServiceBase } from "./base/dataField.service.base";

@Injectable()
export class DataFieldService extends DataFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
