import { Author } from 'src/author/entities/author.entity';

export class CreatePostDto {
  author: Author;
  content: string;
}
