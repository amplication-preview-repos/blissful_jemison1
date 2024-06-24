/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DataField as PrismaDataField } from "@prisma/client";

export class DataFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DataFieldCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dataField.count(args);
  }

  async dataFields(
    args: Prisma.DataFieldFindManyArgs
  ): Promise<PrismaDataField[]> {
    return this.prisma.dataField.findMany(args);
  }
  async dataField(
    args: Prisma.DataFieldFindUniqueArgs
  ): Promise<PrismaDataField | null> {
    return this.prisma.dataField.findUnique(args);
  }
  async createDataField(
    args: Prisma.DataFieldCreateArgs
  ): Promise<PrismaDataField> {
    return this.prisma.dataField.create(args);
  }
  async updateDataField(
    args: Prisma.DataFieldUpdateArgs
  ): Promise<PrismaDataField> {
    return this.prisma.dataField.update(args);
  }
  async deleteDataField(
    args: Prisma.DataFieldDeleteArgs
  ): Promise<PrismaDataField> {
    return this.prisma.dataField.delete(args);
  }
}
