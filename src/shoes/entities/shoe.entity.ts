import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, JoinTable } from 'typeorm'
import { Brand } from './brand.entity';
// import { AbstractEntity } from 'src/database/abstract.entity';
import { AbstractEntity } from "../../database/abstract.entity";
import { Comment } from './comment.entity';
import { Tag } from './tag.entity';

@Entity()
export class Shoe extends AbstractEntity<Shoe> {
    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    price: string

    @Column({ nullable: false })
    image: string

    @Column({ nullable: false })
    description: string

    @OneToOne(() => Brand, { cascade: true })
    @JoinColumn()
    brand: Brand

    @OneToMany(() => Comment, (comment) => comment.shoe, { cascade: true })
    comments: Comment[]

    @ManyToMany(() => Tag, { cascade: true })
    @JoinTable()
    tags: Tag[]

}
