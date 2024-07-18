import { Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { EntityManager, Repository } from 'typeorm';
import { Shoe } from './entities/shoe.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShoesService {
  constructor(
    @InjectRepository(Shoe)
    private shoeRepository: Repository<Shoe>,
    private readonly entityMangeger: EntityManager
  ) { }

  async create(createShoeDto: CreateShoeDto) {
    const shoe = new Shoe(createShoeDto);
    await this.entityMangeger.save(shoe)
  }

  async findAll() {
    return await this.shoeRepository.find()
  }

  async findOne(id: number) {
    return await this.shoeRepository.findOneBy({ id })
    // return `This action returns a #${id} shoe`;
  }

  async update(id: number, updateShoeDto: UpdateShoeDto) {
    return await this.shoeRepository.update({ id }, updateShoeDto)
    // return `This action updates a #${id} shoe`;
  }

  async remove(id: number) {
    return await this.shoeRepository.delete({ id })
    // return `This action removes a #${id} shoe`;
  }
}
