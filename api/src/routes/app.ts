/**
 * Application Routes
 *
 * Here we can declare as many endpoints as we want, a callback is needed to
 * handle request to this endpoints.
 */
import * as express from 'express'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
    res.send(`Nice to meet you! I'm Jovert`)
})

export default router
