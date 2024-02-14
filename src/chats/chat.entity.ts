import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export default class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author1: number;

  @Column()
  author2: number;

  @Column()
  messages: string;
}
