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
    return process.env.NODE_ENV || 'default'
}
