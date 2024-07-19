import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';

@Controller('shoes')
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) { }

  @Post()
  async create(@Body() createShoeDto: CreateShoeDto) {
    return this.shoesService.create(createShoeDto);
  }

  @Get()
  async findAll() {
    return this.shoesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.shoesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateShoeDto: UpdateShoeDto) {
    return this.shoesService.update(+id, updateShoeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.shoesService.remove(+id);
  }
}
