import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto, @Res() res) {
    const postCreated = await this.postsService.create(createPostDto);
    if (postCreated === false) {
      return res.status(400).send({ message: 'Error creating post' });
    }
    return res.status(201).send(postCreated);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const postFound = await this.postsService.findOne(+id);
    if (!postFound) {
      return res.status(404).send({ message: `Post with id ${id} not found` });
    }
    return res.status(200).send(postFound);
  }

  @Patch(':id')
  update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    const isUpdated = this.postsService.update(+id, updatePostDto);
    if (!isUpdated) {
      return res.status(404).send({ message: `Post with id ${id} not found` });
    }
    return res.status(200).send(isUpdated);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const isDeleted = await this.postsService.remove(+id);
    if (isDeleted.affected === 0) {
      return { message: `Post with id ${id} not found` };
    }
    return { message: `Post with id ${id} deleted successfully` };
  }
}
