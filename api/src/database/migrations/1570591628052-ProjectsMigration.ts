/* eslint-disable */
import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm'

export class ProjectsMigration1570591628052 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'projects',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true
          },

          {
            name: 'name',
            type: 'varchar'
          },

          {
            name: 'description',
            type: 'text',
            isNullable: true
          },

          {
            name: 'createdAt',
            type: 'timestamp without time zone'
          },

          {
            name: 'updatedAt',
            type: 'timestamp without time zone'
          }
        ]
      }),
      true
    )

    await queryRunner.createIndex(
      'projects',
      new TableIndex({
        name: 'IDX_PROJECT_NAME',
        columnNames: ['name']
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('projects')
  }
}
