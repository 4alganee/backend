import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ReviewCreateDto } from './dto/review.create.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async listReviews() {
    return await this.prisma.recipeReview.findMany({
      select: {
        id: true,
        content: true,
        star: true,
        recipeId: true,
        image: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async createReview(reviewCreateDto: ReviewCreateDto) {
    return await this.prisma.recipeReview.create({
      data: {
        content: reviewCreateDto.content,
        star: reviewCreateDto.star,
        recipeId: reviewCreateDto.recipeId,
        userId: reviewCreateDto.userId,
      },
    });
  }
}
