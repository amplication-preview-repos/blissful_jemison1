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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DataRequestListRelationFilter } from "../../dataRequest/base/DataRequestListRelationFilter";
import { DataRequestUserListRelationFilter } from "../../dataRequestUser/base/DataRequestUserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class CompanyWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DataRequestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DataRequestListRelationFilter)
  @IsOptional()
  @Field(() => DataRequestListRelationFilter, {
    nullable: true,
  })
  dataRequests?: DataRequestListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DataRequestUserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DataRequestUserListRelationFilter)
  @IsOptional()
  @Field(() => DataRequestUserListRelationFilter, {
    nullable: true,
  })
  dataRequestUsers?: DataRequestUserListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;
}

export { CompanyWhereInput as CompanyWhereInput };
