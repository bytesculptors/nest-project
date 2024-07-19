// import { AbstractEntity } from "src/database/abstract.entity";
import { AbstractEntity } from "../../database/abstract.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { Shoe } from "./shoe.entity";

@Entity()
export class Comment extends AbstractEntity<Comment> {
    @Column()
    content: string;

    @ManyToOne(() => Shoe, (shoe) => shoe.comments)
    shoe: Shoe
}