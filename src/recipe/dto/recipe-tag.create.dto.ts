import { IsString } from 'class-validator';

export class RecipeTagCreateDto {
  @IsString()
  name: string;
}
