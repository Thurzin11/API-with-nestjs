import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'author' })
export class Author {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  avatarUrl: string;
  @Column()
  name: string;
  @Column()
  role: string;
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
