import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configModule } from './config.module';
import { FoodModule } from './food/food.module';
import { RecipeModule } from './recipe/recipe.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [configModule, UserModule, FoodModule, RecipeModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
