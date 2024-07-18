import { Injectable, NotFoundException } from '@nestjs/common';
import { Laptop } from './interfaces/laptop.interface'

@Injectable()
export class LaptopsService {
    private laptops: Laptop[] = []
    create(laptop: Laptop): Laptop {
        this.laptops.push(laptop)
        return laptop

    }

    findAll(): Laptop[] {
        return this.laptops
    }

    findOne(id: number): Laptop {
        return this.laptops.find(laptop => laptop.id === Number(id))
    }

    updateOne(id: number, laptop: Laptop): Laptop {
        const index = this.laptops.findIndex(laptop => laptop.id === Number(id))
        this.laptops[index] = laptop
        return this.laptops[index]
    }

    deleteOne(id: Number) {
        const newLaptopList = this.laptops.filter(laptop => laptop.id !== Number(id))
        this.laptops = newLaptopList
    }
}
