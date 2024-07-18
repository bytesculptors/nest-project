import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LaptopsService } from './laptops.service'
import { CreateLaptopDto } from './dto/createLaptops.dto'
import { UpdateLaptopDto } from './dto/updateLaptops.dto';

@Controller('laptops')
export class LaptopsController {
    constructor(private readonly laptopsServcie: LaptopsService) { }

    @Get()
    findAll() {
        console.log(this.laptopsServcie.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(this.laptopsServcie.findOne(id))
    }

    @Post('/create')
    create(@Body() createLaptopDto: CreateLaptopDto) {
        console.log(this.laptopsServcie.create(createLaptopDto));
    }

    @Put('/update/:id')
    updateOne(@Param('id') id: number, @Body() updatLaptopDto: UpdateLaptopDto) {
        console.log(this.laptopsServcie.updateOne(id, updatLaptopDto));
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        this.laptopsServcie.deleteOne(id)
    }
}
