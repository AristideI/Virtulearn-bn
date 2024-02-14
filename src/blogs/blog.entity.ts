import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export default class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  coverImg: string;

  @Column()
  authorId: number;

  @Column()
  secondImg: string;

  @Column()
  content: string;

  @Column()
  discussion: string;
}
