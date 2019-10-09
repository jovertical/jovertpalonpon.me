/**
 * Gives the application's environment
 * Defaults to `development`
 */
export const getEnvironment = (): string => {
    return process.env.NODE_ENV || 'development'
}
