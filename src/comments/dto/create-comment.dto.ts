import { Author } from 'src/author/entities/author.entity';
import { Post } from 'src/posts/entities/post.entity';

export class CreateCommentDto {
  author: Author;
  textComment: string;
  post: Post;
}
