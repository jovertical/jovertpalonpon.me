import {
  createConnection,
  getConnection,
  Connection,
  ConnectionOptions
} from 'typeorm'
import Project from '@backend/entities/Project'

const options: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  extra: {
    ssl: process.env.NODE_ENV === 'production'
  },
  entities: [Project]
}

/**
 * Get the active db connection, create if none found.
 */
export default async (): Promise<Connection> => {
  try {
    const connection = getConnection()
    await connection.close()

    await createConnection(options)
  } catch (error) {
    await createConnection(options)
  }

  return getConnection()
}
