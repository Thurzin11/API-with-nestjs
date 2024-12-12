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
    const postFound: Post = await this.findOne(id);
    if (!postFound) {
      return `Post with id ${id} not found`;
    }
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
