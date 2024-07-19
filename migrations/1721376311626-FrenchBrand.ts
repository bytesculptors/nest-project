import { Logger } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

export class FrenchBrand1721376311626 implements MigrationInterface {
    private readonly logger = new Logger(FrenchBrand1721376311626.name)
    public async up(queryRunner: QueryRunner): Promise<void> {
        this.logger.log('Up')
        await queryRunner.query("UPDATE shoe SET price = '$200' ")
    }

    public async down(): Promise<void> {
        this.logger.log('Down')
    }

}
