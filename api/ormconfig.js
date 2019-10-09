const local = {
    entities: ['src/app/models/*.ts'],
    migrations: [
        'src/database/migrations/*.ts',
        'src/database/seeders/*.ts'
    ],
    cli: {
        migrationsDir: 'src/database/migrations'
    },
    synchronize: true,
}

const cloud = {
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
        ...local,
        name: 'default',
        type: 'sqlite',
        database: 'src/database/database.sqlite',
    },

    {
        ...local,
        name: 'testing',
        type: 'sqlite',
        database: ':memory:'
    },

    {
        ...cloud,
        name: 'production',
        type: 'postgres',
        url: process.env.DB_URL,
        extra: {
            ssl: true
        }
    }
]