import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/shoes/entities/brand.entity';
import { Comment } from 'src/shoes/entities/comment.entity';
import { Shoe } from 'src/shoes/entities/shoe.entity';
import { Tag } from 'src/shoes/entities/tag.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                database: 'postgres',
                username: 'pg',
                password: 'pg',
                autoLoadEntities: true,
                entities: [Shoe, Brand, Comment, Tag],
                synchronize: true
            }),
            // inject: [ConfigService]
        }),
    ]
})
export class DatabaseModule { }
