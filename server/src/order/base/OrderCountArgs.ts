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
import { OrderWhereInput } from "./OrderWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OrderCountArgs {
  @ApiProperty({
    required: false,
    type: () => OrderWhereInput,
  })
  @Field(() => OrderWhereInput, { nullable: true })
  @Type(() => OrderWhereInput)
  where?: OrderWhereInput;
}

export { OrderCountArgs as OrderCountArgs };