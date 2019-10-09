const config = {
    entities: ['src/app/models/*.ts'],
    migrations: [
        'src/database/migrations/*.ts',
        'src/database/seeders/*.ts'
    ],
    cli: {
        migrationsDir: 'src/database/migrations'
    }
}

module.exports = [
    {
        name: 'development',
        ...config,
        type: 'sqlite',
        database: 'src/database/database.sqlite',
    },

    {
        name: 'testing',
        type: 'sqlite',
        database: ':memory:'
    }
]