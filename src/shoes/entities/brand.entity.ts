// import { AbstractEntity } from "src/database/abstract.entity";
import { AbstractEntity } from "../../database/abstract.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand extends AbstractEntity<Brand> {
    @Column()
    brand: string

    @Column()
    origin: string
}