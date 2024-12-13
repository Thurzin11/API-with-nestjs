import { Author } from 'src/author/entities/author.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
}
