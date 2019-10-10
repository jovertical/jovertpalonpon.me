const path = require('path')

const config = {
    entities: [path.resolve(__dirname, 'src/app/models/*.ts')],
    migrations: [
        path.resolve(__dirname, 'src/database/migrations/*.ts'),
        path.resolve(__dirname, 'src/database/seeders/*.ts')
    ],
    cli: {
        migrationsDir: path.resolve(__dirname, 'src/database/migrations')
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