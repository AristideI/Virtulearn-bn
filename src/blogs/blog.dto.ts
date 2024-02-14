import { IsArray, IsNumber, IsString } from 'class-validator';
import { Discussion } from '../interfaces';

export default class BlogDto {
  @IsString()
  coverImg: string;
  @IsNumber()
  authorId: number;
  @IsString()
  secondImg: string;
  @IsString()
  content: string[];
}

export interface BlogProps {
  coverImg: string;
  authorId: number;
  secondImg: string;
  content: string[];
  discussion: Discussion[];
}
