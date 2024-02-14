import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';

@Module({
  providers: [CoursesService],
  controllers: [CoursesController],
  imports: [TypeOrmModule.forFeature([Course])],
})
export class CoursesModule {}
