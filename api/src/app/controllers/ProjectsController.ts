import { Request, Response } from 'express'
import { body } from 'express-validator'
import {
    controller,
    httpGet,
    httpPost,
    httpPatch,
    httpDelete,
    request,
    response,
    requestParam
} from 'inversify-express-utils'
import { Repository } from 'typeorm'
import Project from '../models/Project'
import Controller from './Controller'
import { getRepository, now, validate } from '../../helpers'

const validation = validate([
    body('name')
        .not()
        .isEmpty()
])

@controller('/projects')
export default class ProjectsController extends Controller {
    /**
     * Get a list of projects
     */
    @httpGet('/')
    public async list(@response() res: Response): Promise<Response> {
        const projects = await this.repo().then((repo: Repository<Project>) => repo.find())

        return res.send(projects)
    }

    /**
     * Create a new project
     */
    @httpPost('/', validation)
    public async store(@request() req: Request, @response() res: Response): Promise<Response> {
        const project = await this.repo().then((repo: Repository<Project>) =>
            repo.save({
                name: req.body.name,
                description: req.body.description
            })
        )

        return res.status(201).send(project)
    }

    /**
     * Update a project
     */
    @httpPatch('/:id', validation)
    public async update(
        @request() req: Request,
        @response() res: Response,
        @requestParam('id') id: string
    ): Promise<Response> {
        const project = await this.repo().then(async (repo: Repository<Project>) => {
            const project = await repo.findOneOrFail(id)
            project.name = req.body.name
            project.description = req.body.description
            project.updatedAt = now()

            return this.repo().then(repo => repo.save(project))
        })

        return res.send(project)
    }

    /**
     * Delete a project
     */
    @httpDelete('/:id')
    public async delete(@response() res: Response, @requestParam('id') id: string): Promise<Response> {
        await this.repo().then(async (repo: Repository<Project>) => {
            const project = await repo.findOneOrFail(id)

            return repo.remove([project])
        })

        return res.sendStatus(200)
    }

    /**
     * The project's repository
     */
    private repo(): Promise<Repository<Project>> {
        return getRepository(Project)
    }
}
