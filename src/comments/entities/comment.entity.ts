import { Author } from 'src/author/entities/author.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  author: Author;
  textComment: string;
  @ManyToOne(() => Post, (post) => post.comments, { eager: true })
  @JoinColumn({ name: 'post_id' })
  post: Post;
}
