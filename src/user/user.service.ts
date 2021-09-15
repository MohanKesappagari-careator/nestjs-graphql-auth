import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async create(createUserInput: CreateUserInput) {
    const user = await this.userRepo.create(createUserInput);
    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: string) {
    return this.userRepo.findOne(id);
  }

  findUser(email: string) {
    return this.userRepo.findOne({ email });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userRepo.update(id, updateUserInput);
  }

  remove(id: string) {
    return this.userRepo.delete(id);
  }
}
