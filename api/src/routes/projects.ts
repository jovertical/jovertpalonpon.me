import * as moment from 'moment'
import * as express from 'express'
import { Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import { createConnection, Connection } from 'typeorm'
import Project from '../app/models/Project'
import { getDatabaseConnection } from '../helpers'

const router = express.Router()

createConnection(getDatabaseConnection()).then((connection: Connection) => {
    const repo = connection.getRepository(Project)

    router.get('/', async (req: Request, res: Response) => {
        const projects = await repo.find()

        return res.send(projects)
    })

    router.post(
        '/',
        [
            check('name')
                .not()
                .isEmpty()
        ],
        async (req: Request, res: Response) => {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() })
            }

            const resource = await repo.create({
                name: req.body.name,
                description: req.body.description,
                createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
                updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
            })
            const project = await repo.save(resource)

            return res.send(project)
        }
    )
})

export default router
