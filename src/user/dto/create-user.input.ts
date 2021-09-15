import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Role } from '../roles';
registerEnumType(Role, {
  name: 'Role',
});
@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phonenumber: string;

  @Field({
    defaultValue:
      'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png',
  })
  avatar: string;

  @Field(() => Role, { defaultValue: Role.USER })
  role: Role;
}
