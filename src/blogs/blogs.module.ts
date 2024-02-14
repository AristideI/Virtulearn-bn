import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Blog from './blog.entity';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService],
  imports: [TypeOrmModule.forFeature([Blog])],
})
export class BlogsModule {}
