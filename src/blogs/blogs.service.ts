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

  find(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  getAll() {
    return this.repo.find();
  }

  async getOne(id: number) {
    const blog = await this.find(id);
    if (!blog) {
      throw new NotFoundException(`Blog with Id ${id} Not Found`);
    }
    return blog;
  }

  async getUsersBlogs(authorId: number) {
    const blogs = await this.repo.find({ where: { authorId } });
    if (!blogs.length) {
      throw new NotFoundException(`User with Id ${authorId} has no Blogs`);
    }

    return blogs;
  }

  create(blog: BlogProps) {
    const newBlog = {
      coverImg: blog.coverImg,
      authorId: blog.authorId,
      secondImg: blog.secondImg,
      content: blog.content,
      discussion: JSON.stringify(blog.discussion),
    };
    const saveBlog = this.repo.create(newBlog);
    return this.repo.save(saveBlog);
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
