//Usamos essa migrations para fazer a parte de criação da nossa tabela no banco de dados
//Aqui, não é uma referência!!!
//Tudo que está aqui, se remete de fato ao nosso banco de dados!!!!
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserMigration1624878684837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table(
      {
        name: "users",
        columns:[
          {
              name: "id",
              type: "uuid",
              isPrimary: true
          },
          {
              name: "name",
              type: "varchar"
          },
          {
              name: "email",
              type: "varchar"
          },
          {
              name: "admin",
              type: "boolean",
              default: true
          },
          {
              name: "created_at",
              type: "timestamp",
              default: "now()"
          },
          {
              name: "updated_at",
              type: "timestamp",
              default: "now()"
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
