import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
