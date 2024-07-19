import { Brand } from "../entities/brand.entity";
import { CreateBrandDto } from "./create-brand.dto";
import { CreateTagDto } from "./create-tag.dto";

export class CreateShoeDto {
    name: string;
    price: string;
    image: string;
    description: string;
    brand: CreateBrandDto;
    tags: CreateTagDto[]
}
