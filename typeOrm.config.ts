import { Brand } from "./src/shoes/entities/brand.entity";
import { Shoe } from "./src/shoes/entities/shoe.entity";
import { Tag } from "./src/shoes/entities/tag.entity";
import { Comment } from "./src/shoes/entities/comment.entity";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'pg',
    password: 'pg',
    migrations: ['migrations/**/*.ts'],
    entities: [Shoe, Brand, Comment, Tag]
})