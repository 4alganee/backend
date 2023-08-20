import { IsInt, IsString } from 'class-validator';

export class RecipeOptionCreateDto {
  @IsString()
  title: string;

  @IsInt()
  recipeId: number;
}
