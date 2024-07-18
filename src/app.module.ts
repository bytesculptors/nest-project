import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShoesModule } from './shoes/shoes.module';
import { LaptopsModule } from './laptops/laptops.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LaptopsModule,
    DatabaseModule,
    ShoesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
