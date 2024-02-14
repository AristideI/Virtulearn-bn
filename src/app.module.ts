import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/course.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { BlogsModule } from './blogs/blogs.module';
import Blog from './blogs/blog.entity';
import Chat from './chats/chat.entity';

const username = encodeURIComponent('iaristide08');
const password = encodeURIComponent('carter123456789');
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `db.sqlite`,
      entities: [Course, Blog, Chat],
      synchronize: true,
    }),
    CoursesModule,
    UsersModule,
    ChatsModule,
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
