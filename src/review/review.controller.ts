import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewCreateDto } from './dto/review.create.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('')
  async listReviews() {
    return await this.reviewService.listReviews();
  }

  @Post('')
  async createReview(@Body() reviewCreateDto: ReviewCreateDto) {
    return await this.reviewService.createReview(reviewCreateDto);
  }
}
