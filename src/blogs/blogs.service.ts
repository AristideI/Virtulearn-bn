import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import Blog from './blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogProps } from './blog.dto';
import { Except } from 'type-fest';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private readonly repo: Repository<Blog>,
  ) {}

  getAll() {
    return this.repo.find();
  }

  getOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  getUsersBlogs(authorId: number) {
    return this.repo.find({ where: { authorId } });
  }

  create(blog: BlogProps) {
    const newBlog = {
      coverImg: blog.coverImg,
      authorId: blog.authorId,
      secondImg: blog.secondImg,
      content: JSON.stringify(blog.content),
      discussion: JSON.stringify(blog.discussion),
    };
    this.repo.create(newBlog);
  }

  async update(id: number, updates: Partial<BlogProps>) {
    const currentBlog = await this.repo.findOne({ where: { id } });
    if (!currentBlog) {
      throw new NotFoundException(`Blog with Id ${id} Not Found`);
    }
    Object.assign(currentBlog, updates);
    return this.repo.save(currentBlog);
  }
}
