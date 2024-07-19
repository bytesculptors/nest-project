import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateShoeDto extends PartialType(CreateCommentDto) {
    comments: CreateCommentDto[]
}
