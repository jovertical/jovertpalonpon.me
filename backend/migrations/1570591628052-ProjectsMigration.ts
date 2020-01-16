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
            name: 'projectImageId',
            type: 'bigint',
            isNullable: true
          },
          {
            name: 'slug',
            type: 'varchar'
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
            name: 'sourceUrl',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'projectUrl',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'iconUrl',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'startDate',
            type: 'date'
          },
          {
            name: 'createdAt',
            type: 'timestamp'
          },
          {
            name: 'updatedAt',
            type: 'timestamp'
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
