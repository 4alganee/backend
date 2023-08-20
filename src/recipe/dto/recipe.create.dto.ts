import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class RecipeCreateDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsInt()
  foodId: number;

  @IsString()
  author: string;

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;

  @IsString()
  estimatedTime: string;

  @IsString()
  price: string;

  @IsInt({ each: true })
  @IsOptional()
  tagIds?: number[];
}
