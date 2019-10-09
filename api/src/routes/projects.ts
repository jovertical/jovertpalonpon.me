import * as express from 'express'
import { Request, Response } from 'express'
import { createConnection, Connection } from 'typeorm'
import Project from '../app/models/Project'
import { getEnvironment } from '../helpers'

const router = express.Router()

createConnection(getEnvironment()).then((connection: Connection) => {
    router.get('/', async (req: Request, res: Response) => {
        const projectRepository = connection.getRepository(Project)

        const projects = await projectRepository.find()

        res.send(projects)
    })
})

export default router
