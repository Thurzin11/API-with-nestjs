import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  author: string;
  @Column()
  content: string;
}
