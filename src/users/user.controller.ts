import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  register(@Body() registerDto: RegisterDto): any {
    return this.userService.register(registerDto);
  }
}
