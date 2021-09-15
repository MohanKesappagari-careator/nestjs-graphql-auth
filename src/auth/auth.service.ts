import { UserService } from './../user/user.service';
import * as bcrypt from 'bcrypt';
import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(login: { email: string; password: string }) {
    const user = await this.userService.findUser(login.email);

    if (!user) {
      throw new UnauthorizedException();
    }
    const isVerified = await bcrypt.compare(login.password, user.password);
    console.log(login.password);

    if (!isVerified) {
      throw new HttpException({ message: 'Invalid Creadentials' }, 400);
    }

    return user;
  }

  async login(login: { email: string; password: string }) {
    const user = await this.validateUser(login);
    console.log(user, '++');

    return user ? 'login' : null;
  }
  async hashPassword(password: string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  }
}
