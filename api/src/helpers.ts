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
