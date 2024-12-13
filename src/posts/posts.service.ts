import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    try {
      const post = this.postRepository.create(createPostDto);
      return await this.postRepository.save(post);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async findAll() {
    return await this.postRepository.find();
  }

  async findOne(id: number) {
    const postFound: Post = await this.postRepository.findOne({
      where: { id },
    });
    return postFound;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const postUpdated = await this.postRepository.save({
      id,
      ...updatePostDto,
    });
    return postUpdated;
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
