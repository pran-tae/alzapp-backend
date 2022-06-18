import { Controller, Get } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): User {
    return this.userService.getOne('1');
  }
}
