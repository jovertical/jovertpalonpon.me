import { NextApiRequest, NextApiResponse } from 'next'
import { validationResult, ValidationChain } from 'express-validator'

export default (validations: ValidationChain[], handle: Function) => async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await Promise.all(validations.map((v: ValidationChain) => v.run(req)))

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  handle(req, res)
}
