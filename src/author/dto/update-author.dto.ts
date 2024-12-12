import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
  avatarUrl: string;
  name: string;
  role: string;
}
