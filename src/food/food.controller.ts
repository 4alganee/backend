import { Body, Controller, Get, Post } from '@nestjs/common';
import { FoodCreateDto } from './dto/food.create.dto';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('')
  async listFoods() {
    return await this.foodService.listFoods();
  }

  @Post('')
  async createFood(@Body() foodCreateDto: FoodCreateDto) {
    return await this.foodService.createFood(foodCreateDto);
  }
}
