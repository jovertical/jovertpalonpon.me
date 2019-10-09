const config = {
    entities: ['dist/app/models/*.js'],
    migrations: [
        'dist/database/migrations/*.js',
        'dist/database/seeders/*.js'
    ],
    cli: {
        migrationsDir: 'dist/database/migrations'
    },
    synchronize: true,
}

module.exports = [
    {
        ...config,
        name: 'default',
        type: 'sqlite',
        database: 'src/database/database.sqlite',
    },

    {
        ...config,
        name: 'testing',
        type: 'sqlite',
        database: ':memory:'
    },

    {
        ...config,
        name: 'production',
        type: 'postgres',
        url: process.env.DB_URL,
        extra: {
            ssl: true
        }
    }
]