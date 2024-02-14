import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Chat from './chat.entity';

@Module({
  controllers: [ChatsController],
  providers: [ChatsService],
  imports: [TypeOrmModule.forFeature([Chat])],
})
export class ChatsModule {}
