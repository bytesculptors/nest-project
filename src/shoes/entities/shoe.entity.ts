import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Shoe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    price: string

    @Column()
    image: string

    @Column()
    description: string

    constructor(shoe: Partial<Shoe>) {
        Object.assign(this, shoe)
    }
}
