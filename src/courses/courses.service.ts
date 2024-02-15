import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { CourseProps } from './course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private readonly repo: Repository<Course>,
  ) {}

  find(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  getAll() {
    return this.repo.find();
  }

  async getOne(id: number) {
    const course = await this.find(id);
    if (!course) {
      throw new NotFoundException(`Course with Id ${id} Not Found`);
    }
    return course;
  }

  async getUsersCourses(authorId: number) {
    const courses = await this.repo.find({ where: { authorId } });
    if (!courses.length) {
      throw new NotFoundException(`User with Id ${authorId} has no courses`);
    }

    return courses;
  }

  create(course: CourseProps) {
    const newCourse = {
      authorId: course.authorId,
      coverImage: course.coverImage,
      content: course.content,
      learners: course.learns,
      discussion: JSON.stringify(course.discussion),
    };
    const saveCourse = this.repo.create(newCourse);
    return this.repo.save(saveCourse);
  }

  async update(id: number, updates: Partial<CourseProps>) {
    const currentCourse = await this.repo.findOne({ where: { id } });
    if (!currentCourse) {
      throw new NotFoundException(`Course with Id ${id} Not Found`);
    }
    Object.assign(currentCourse, updates);
    return this.repo.save(currentCourse);
  }
}
