import { check } from 'express-validator'
import { now, validate } from '../../helpers/utils'

export default validate([
  check('name')
    .not()
    .isEmpty(),
  check('projectUrl')
    .if(check('projectUrl').exists())
    .isURL(),
  check('startDate')
    .not()
    .isEmpty()
    .isBefore(now())
])
