import { check } from 'express-validator'
import { now } from 'helpers/utils'

export const storeValidation = [
  check('name')
    .not()
    .isEmpty(),
  check('projectUrl')
    .if(check('projectUrl').exists())
    .isURL(),
  check('startDate')
    .not()
    .isEmpty()
    .isBefore(now()),
  check('featuredAt')
    .if(check('featuredAt').exists())
    .isBefore(now())
]

export const updateValidation = [
  ...storeValidation
]
