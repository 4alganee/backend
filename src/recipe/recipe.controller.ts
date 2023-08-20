import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RecipeOptionCreateDto } from './dto/recipe-option.create.dto';
import { RecipeTagCreateDto } from './dto/recipe-tag.create.dto';
import { RecipeCreateDto } from './dto/recipe.create.dto';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get('')
  async listRecipes() {
    return await this.recipeService.listRecipes();
  }

  @Post('')
  async createRecipe(@Body() recipeCreateDto: RecipeCreateDto) {
    return await this.recipeService.createRecipe(recipeCreateDto);
  }

  @Post('option')
  async createRecipeOption(
    @Body() recipeOptioncreateDto: RecipeOptionCreateDto,
  ) {
    return await this.recipeService.createRecipeOption(recipeOptioncreateDto);
  }

  @Put(':recipeId/like')
  async likeRecipe(@Param('recipeId') recipeId: number) {
    return await this.recipeService.likeRecipe(recipeId);
  }

  @Post('tag')
  async createRecipeTag(@Body() recipeTagCreateDto: RecipeTagCreateDto) {
    return await this.recipeService.createRecipeTag(recipeTagCreateDto);
  }

  @Get(':recipeId/option')
  async listRecipeOptions(@Param('recipeId') recipeId: number) {
    return await this.recipeService.listRecipeOptions(recipeId);
  }
}
