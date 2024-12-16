import { Author } from 'src/author/entities/author.entity';
import { Post } from 'src/posts/entities/post.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Author, { eager: true })
  @JoinColumn()
  author: Author;
  @Column()
  textComment: string;
  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: 'post_id' })
  post: Post;
}
