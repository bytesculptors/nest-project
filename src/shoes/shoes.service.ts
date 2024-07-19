import { Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { Shoe } from './entities/shoe.entity';
import { Brand } from './entities/brand.entity';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';

@Injectable()
export class ShoesService {
  constructor(
    private connection: DataSource
    // @InjectRepository(Shoe)
    // private shoeRepository: Repository<Shoe>,
    // private readonly entityMangeger: EntityManager
  ) { }

  async create(createShoeDto: CreateShoeDto) {
    const brand = new Brand({
      ...createShoeDto.brand,
    })
    const tags = createShoeDto.tags.map((createTagDto) => new Tag(createTagDto))
    const shoe = new Shoe({
      ...createShoeDto,
      brand,
      comments: [],
      tags
    });
    await this.connection.getRepository(Shoe).save(shoe)
  }

  async findAll() {
    return await this.connection.getRepository(Shoe).find({
      relations: { brand: true, comments: true, tags: true }
    })
  }

  async findOne(id: number) {
    return await this.connection.getRepository(Shoe).findOne({
      where: { id },
      relations: { brand: true, comments: true, tags: true }
    })
    // return `This action returns a #${id} shoe`;
  }

  async update(id: number, updateShoeDto: UpdateShoeDto) {
    const shoes = await this.connection.getRepository(Shoe).findOneBy({ id })
    const comments = updateShoeDto.comments.map((createCommentDto) => new Comment(createCommentDto))
    shoes.comments = comments
    return await this.connection.getRepository(Shoe).save(shoes)
    // return await this.connection.getRepository(Shoe).update({ id }, updateShoeDto)
    // return `This action updates a #${id} shoe`;
  }

  async remove(id: number) {
    return await this.connection.getRepository(Shoe).delete({ id })
    // return `This action removes a #${id} shoe`;
  }
}
