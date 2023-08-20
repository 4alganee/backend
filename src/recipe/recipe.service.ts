import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RecipeOptionCreateDto } from './dto/recipe-option.create.dto';
import { RecipeTagCreateDto } from './dto/recipe-tag.create.dto';
import { RecipeCreateDto } from './dto/recipe.create.dto';

@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}

  async listRecipes() {
    const recipes = this.prisma.recipe.findMany({
      select: {
        id: true,
        name: true,
        content: true,
        foodId: true,
        author: true,
        isPublic: true,
        estimatedTime: true,
        likes: true,
        image: true,
        price: true,
        reviews: {
          select: {
            id: true,
            content: true,
            star: true,
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            image: true,
          },
        },
        tags: {
          select: {
            recipeTag: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    const stars = this.prisma.recipeReview.findMany({
      select: {
        recipeId: true,
        star: true,
      },
    });

    const options = this.prisma.recipeOption.findMany();

    const [recipeList, starList, optionList] = await Promise.all([
      recipes,
      stars,
      options,
    ]);

    return recipeList.map((recipe) => {
      const stars = starList.filter((star) => star.recipeId === recipe.id);
      const options = optionList.filter(
        (option) => option.recipeId === recipe.id,
      );
      const starAverage =
        stars.reduce((acc, star) => acc + star.star, 0) / stars.length;

      return {
        ...recipe,
        options,
        starData: {
          count: stars.length,
          average: starAverage,
        },
      };
    });
  }

  async createRecipe(recipeCreateDto: RecipeCreateDto) {
    return await this.prisma.recipe.create({
      data: {
        name: recipeCreateDto.name,
        content: recipeCreateDto.content,
        foodId: recipeCreateDto.foodId,
        author: recipeCreateDto.author,
        isPublic: recipeCreateDto.isPublic,
        estimatedTime: recipeCreateDto.estimatedTime,
        price: recipeCreateDto.price,
        tags: {
          createMany: {
            data: recipeCreateDto.tagIds.map((tagId) => ({
              tagId,
            })),
          },
        },
      },
    });
  }

  async createRecipeOption(recipeOptionCreateDto: RecipeOptionCreateDto) {
    return await this.prisma.recipeOption.create({
      data: {
        recipeId: recipeOptionCreateDto.recipeId,
        title: recipeOptionCreateDto.title,
      },
    });
  }

  async listRecipeOptions(recipeId: number) {
    return await this.prisma.recipeOption.findMany({
      where: {
        recipeId,
      },
    });
  }

  async likeRecipe(recipeId: number) {
    return await this.prisma.recipe.update({
      where: {
        id: recipeId,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
  }

  async createRecipeTag(recipeTagCreateDto: RecipeTagCreateDto) {
    return await this.prisma.recipeTag.create({
      data: {
        name: recipeTagCreateDto.name,
      },
    });
  }
}
