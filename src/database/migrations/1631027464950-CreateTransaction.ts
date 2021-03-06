import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransaction1631027464950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "transactions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    }, 
                    {
                        name: "amount",
                        type: "numeric"
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "category",
                        type: "varchar"
                    },
                    {
                        name: "date",
                        type: "date"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("transactions");
    }

}
