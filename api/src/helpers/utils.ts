import {
  Connection,
  createConnection,
  getConnection,
  Repository
} from 'typeorm'
import * as moment from 'moment'

/**
 * Gives the application's environment.
 *
 * @default development
 */
export const getEnvironment = (): string => {
  return process.env.NODE_ENV || 'development'
}

/**
 * A simple wrapper to get the database connection name.
 *
 * @default default
 */
export const getDatabaseConnection = (): string => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'default'
  }

  return process.env.NODE_ENV
}

/**
 * Get the repository of the model.
 *
 * @param model The model of the repository.
 */
export const getRepository = (model: any): Promise<Repository<any>> => {
  const connectionName = getDatabaseConnection()

  return createConnection(connectionName)
    .then((con: Connection) => con.getRepository(model))
    .catch(() => getConnection(connectionName).getRepository(model))
}

/**
 * Gives the current time
 */
export const now = (): string => {
  return moment().format('YYYY-MM-DD hh:mm:ss')
}
