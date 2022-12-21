import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  private userRepository = new UserRepository();
  @Post()
  async createUser(@Body() userData) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async listAllUsers() {
    return this.userRepository.list();
  }
}
