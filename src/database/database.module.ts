import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoesModule } from 'src/shoes/shoes.module';

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
                synchronize: true
            }),
            // inject: [ConfigService]
        }),
    ]
})
export class DatabaseModule { }
