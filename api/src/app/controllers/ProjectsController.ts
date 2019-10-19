import { Request, Response } from 'express'
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils'
import { Repository } from 'typeorm'
import Controller from './Controller'
import Project from '../models/Project'

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
    @httpPost('/')
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
        return this.getRepository(Project)
    }
}
