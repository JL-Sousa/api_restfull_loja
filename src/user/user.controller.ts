import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async listAllUsers() {
    return this.userRepository.list();
  }
}
