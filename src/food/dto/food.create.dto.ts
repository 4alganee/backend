import { IsNotEmpty, IsString } from 'class-validator';

export class FoodCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
