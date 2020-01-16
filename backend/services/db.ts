import {
  createConnection,
  getConnection,
  Connection,
  ConnectionOptions
} from 'typeorm'
import Project from '@backend/entities/Project'
import ProjectImage from '@backend/entities/ProjectImage'
import Tag from '@backend/entities/Tag'

const options: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  extra: {
    ssl: process.env.NODE_ENV === 'production'
  },
  entities: [Project, ProjectImage, Tag]
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
