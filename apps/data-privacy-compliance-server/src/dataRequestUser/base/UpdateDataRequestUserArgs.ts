/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataRequestUserWhereUniqueInput } from "./DataRequestUserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DataRequestUserUpdateInput } from "./DataRequestUserUpdateInput";

@ArgsType()
class UpdateDataRequestUserArgs {
  @ApiProperty({
    required: true,
    type: () => DataRequestUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DataRequestUserWhereUniqueInput)
  @Field(() => DataRequestUserWhereUniqueInput, { nullable: false })
  where!: DataRequestUserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DataRequestUserUpdateInput,
  })
  @ValidateNested()
  @Type(() => DataRequestUserUpdateInput)
  @Field(() => DataRequestUserUpdateInput, { nullable: false })
  data!: DataRequestUserUpdateInput;
}

export { UpdateDataRequestUserArgs as UpdateDataRequestUserArgs };