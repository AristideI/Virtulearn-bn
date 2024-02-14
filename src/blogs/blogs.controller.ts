import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import BlogDto from './blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  GetAll() {
    return this.blogsService.getAll();
  }
  @Get('/:id')
  GetOne(@Param('id') id: string) {
    return this.blogsService.getOne(+id);
  }
  @Get('/user/:authorId')
  GetUserBlogs(@Param('authorId') authorId: string) {
    return this.blogsService.getUsersBlogs(+authorId);
  }

  @Post()
  create(@Body() body: BlogDto) {
    return this.blogsService.create({ ...body, discussion: [] });
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: Partial<BlogDto>) {
    return this.blogsService.update(+id, body);
  }
}
