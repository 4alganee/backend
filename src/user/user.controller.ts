import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async listUsers() {
    return this.userService.listUsers();
  }

  @Post('')
  async createUser(@Body() userCreateDto: UserCreateDto) {
    return await this.userService.createUser(userCreateDto);
  }
}
