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
import { Response } from 'express';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  async findAll() {
    return await this.authorService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res: Response, @Param('id') id: string) {
    const post = await this.authorService.findOne(+id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.status(200).json(post);
  }

  @Patch(':id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    const authorUpdated = await this.authorService.update(+id, updateAuthorDto);
    if (authorUpdated.affected === 0) {
      return res.status(404).json({ message: 'Author not found' });
    }
    return res.status(200).json({ messge: 'Author updated successfully' });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const isDeleted = await this.authorService.remove(+id);
    if (isDeleted.affected === 0) {
      return res.status(404).json({ message: 'Author not found' });
    }
    return res.status(200).json({ message: 'Author deleted successfully' });
  }
}
