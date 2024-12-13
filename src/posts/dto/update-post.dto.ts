import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { Author } from 'src/author/entities/author.entity';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  author: Author;
  content: string;
}
