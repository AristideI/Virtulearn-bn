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
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  courses: string;

  @Column()
  chats: string;

  @Column()
  profile: string;

  @Column()
  isAdmin: boolean;
}
