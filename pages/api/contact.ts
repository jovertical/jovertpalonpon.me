import { NextApiRequest, NextApiResponse } from 'next'
import { check } from 'express-validator'
import validate from '@backend/middlewares/validate'
import Mailer from '@backend/services/mailer'

export default validate(
  [
    check('name').notEmpty(),
    check('email')
      .notEmpty()
      .isEmail(),
    check('message').notEmpty()
  ],
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    Mailer.send({
      to: 'palonponjovertlota@gmail.com',
      from: req.body?.email,
      subject: req.body?.name + ' wants to talk to you',
      text: req.body?.message
    })

    res.send({ message: 'Sending message...' })
  }
)
