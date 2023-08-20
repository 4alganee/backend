import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserCreateDto } from './dto/user.create.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async listUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(userCreateDto: UserCreateDto) {
    return await this.prisma.user.create({
      data: {
        name: userCreateDto.name,
      },
    });
  }
}
