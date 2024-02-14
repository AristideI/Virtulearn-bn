import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

interface Content {
  text: string;
  image: string;
  links: string[];
}

interface Discussion {
  text: string;
  author: string;
  time: string;
}

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  authorId: number;

  @Column()
  coverImage: string;

  @Column()
  content: string;

  @Column()
  learns: number;

  @Column()
  discussion: string;
}
