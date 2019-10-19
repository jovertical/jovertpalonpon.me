import { Request, Response } from 'express'
import { body } from 'express-validator'
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils'
import { Repository } from 'typeorm'
import Project from '../models/Project'
import Controller from './Controller'
import { getRepository, validate } from '../../helpers'

const storeValidation = validate([
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
    @httpPost('/', storeValidation)
    public async store(@request() req: Request, @response() res: Response): Promise<Response> {
        const project = await this.repo().then((repo: Repository<Project>) =>
            repo.save({
                name: req.body.name,
                description: req.body.description
            })
        )

        return res.send(project)
    }

    /**
     * The project's repository
     */
    private repo(): Promise<Repository<Project>> {
        return getRepository(Project)
    }
}
