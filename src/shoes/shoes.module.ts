import { Module } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoe } from './entities/shoe.entity';
import { Brand } from './entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [ShoesController],
  providers: [ShoesService],
})
export class ShoesModule { }
