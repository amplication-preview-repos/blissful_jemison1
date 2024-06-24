/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDataRequestRequestStatus } from "./EnumDataRequestRequestStatus";
import { EnumDataRequestStatus } from "./EnumDataRequestStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class DataRequestCreateInput {
  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  companyRelation?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  requestCreatedAt?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumDataRequestRequestStatus,
  })
  @IsEnum(EnumDataRequestRequestStatus)
  @IsOptional()
  @Field(() => EnumDataRequestRequestStatus, {
    nullable: true,
  })
  requestStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumDataRequestStatus,
  })
  @IsEnum(EnumDataRequestStatus)
  @IsOptional()
  @Field(() => EnumDataRequestStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userRelation?: string | null;
}

export { DataRequestCreateInput as DataRequestCreateInput };
