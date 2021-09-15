import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Role } from '../roles';

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
