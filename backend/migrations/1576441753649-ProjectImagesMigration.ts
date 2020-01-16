import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ProjectImagesMigration1576441753649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'project_images',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true
          },
          {
            name: 'projectId',
            type: 'bigint'
          },
          {
            name: 'url',
            type: 'varchar'
          }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('project_images')
  }
}
