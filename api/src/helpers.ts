import { Request, Response, NextFunction } from 'express'
import { validationResult, ValidationChain } from 'express-validator'
import { Connection, createConnection, getConnection, Repository } from 'typeorm'

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
 * Wrapper function that cycles through validation rules
 * This will intercept requests from the router.
 *
 * @param validations List of chained validation rules
 */
export const validate = (validations: Array<ValidationChain>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map((v: ValidationChain) => v.run(req)))

        const errors = validationResult(req)

        if (errors.isEmpty()) {
            return next()
        }

        res.status(422).json({ errors: errors.array() })
    }
}
