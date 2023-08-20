import { IsInt, IsString } from 'class-validator';

export class ReviewCreateDto {
  @IsString()
  content: string;

  @IsInt()
  star: number;

  @IsInt()
  recipeId: number;

  @IsString()
  userId: string;
}
