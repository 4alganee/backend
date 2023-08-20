import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FoodCreateDto } from './dto/food.create.dto';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async listFoods() {
    return await this.prisma.food.findMany();
  }

  async createFood(foodCreateDto: FoodCreateDto) {
    return await this.prisma.food.create({
      data: {
        name: foodCreateDto.name,
      },
    });
  }
}
