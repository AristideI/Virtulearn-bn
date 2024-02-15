import { IsNumber, IsString } from 'class-validator';

export class CourseDTO {
  @IsNumber()
  authorId: number;
  @IsString()
  coverImage: string;
  @IsString()
  content: string;
}

export interface CourseProps {
  authorId: number;
  coverImage: string;
  content: string;
  learns: number;
  discussion: string;
}

