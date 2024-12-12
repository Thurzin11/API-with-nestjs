import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryColumn()
  id: number;
  title: string;
  content: string;
}
