const path = require('path')

const config = {
    entities: [path.resolve(__dirname, 'src/app/models/*.ts')],
    migrations: [
        path.resolve(__dirname, 'src/database/migrations/*.ts')
    ],
    cli: {
        migrationsDir: path.resolve(__dirname, 'src/database/migrations')
    },
    synchronize: true,
}

const cloudConfig = {
    entities: [path.resolve(__dirname, 'dist/app/models/*.js')],
    migrations: [
        path.resolve(__dirname, 'dist/database/migrations/*.js'),
    ],
    cli: {
        migrationsDir: path.resolve(__dirname, 'dist/database/migrations')
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
        ...cloudConfig,
        name: 'production',
        type: 'postgres',
        url: process.env.DATABASE_URL,
        extra: {
            ssl: true
        }
    }
]