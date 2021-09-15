import { User } from './../user/entities/user.entity';
import { Args, Mutation, ObjectType, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from 'src/user/dto/login-user.inpt';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  login(@Args('login') login: LoginInput): any {
    return this.authService.login(login);
  }
}
