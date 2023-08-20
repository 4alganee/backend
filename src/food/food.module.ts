import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';

@Module({
  controllers: [FoodController],
  providers: [FoodService, PrismaService],
})
export class FoodModule {}
