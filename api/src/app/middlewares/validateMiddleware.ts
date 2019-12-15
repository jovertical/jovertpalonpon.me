import { Request, Response, NextFunction } from 'express'
import { validationResult, ValidationChain } from 'express-validator'

export default (validations: Array<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((v: ValidationChain) => v.run(req)))

    const errors = validationResult(req)

    if (errors.isEmpty()) {
      return next()
    }

    res.status(422).json({ errors: errors.array() })
  }
}
