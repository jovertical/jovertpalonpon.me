/**
 * Application Routes
 *
 * Here we can declare as many endpoints as we want, a callback is needed to
 * handle request to this endpoints.
 */
import * as express from 'express'
import { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => res.send(`Hello! I'm Jovert`))

export default router
