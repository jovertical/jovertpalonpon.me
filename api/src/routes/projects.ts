import * as express from 'express'
import { Request, Response } from 'express'
import { check } from 'express-validator'
import { createConnection, Connection } from 'typeorm'
import Project from '../app/models/Project'
import ProjectsController from '../app/controllers/ProjectsController'
import { getDatabaseConnection } from '../helpers'

const router = express.Router()

createConnection(getDatabaseConnection()).then((connection: Connection) => {
    const repo = connection.getRepository(Project)

    router.get('/', (req, res) => new ProjectsController(repo).list(req, res))
    router.post(
        '/',
        [
            check('name')
                .not()
                .isEmpty()
        ],
        (req: Request, res: Response) => new ProjectsController(repo).store(req, res)
    )
})

export default router
