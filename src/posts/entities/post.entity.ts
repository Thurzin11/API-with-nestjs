import { Author } from 'src/author/entities/author.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Author, (author) => author.posts, { eager: true })
  @JoinColumn({ name: 'author_id' })
  author: Author;
  @Column()
  content: string;
  @OneToMany(() => Comment, (comment) => comment.post, { eager: true })
  comments: Comment[];
  @Column({ nullable: true })
  publishedAt: Date;
}
