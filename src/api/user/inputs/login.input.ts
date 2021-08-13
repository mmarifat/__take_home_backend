import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, Max, Min } from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Field(() => String)
  @IsNotEmpty()
  readonly password: string;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(1)
  readonly isRemembered: number;
}
