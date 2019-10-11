import { Request, Response } from 'express'
import { controller, httpGet, httpPost } from 'inversify-express-utils'
import { Repository } from 'typeorm'
import Controller from './Controller'
import Project from '../models/Project'

@controller('/projects')
export default class ProjectsController extends Controller {
    /**
     * Get a listing of projects
     *
     * @param req Request object
     * @param res Response object
     */
    @httpGet('/')
    public async list(req: Request, res: Response) {
        const repo = await this.getRepository(Project)

        const projects = await repo.find()

        return res.send(projects)
    }

    /**
     * Create a new project
     *
     * @param req Request object
     * @param res Response object
     */
    @httpPost('/')
    public async store(req: Request, res: Response) {
        const repo: Repository<Project> = await this.getRepository(Project)

        const project = await repo.save({
            name: req.body.name,
            description: req.body.description
        })

        return res.send(project)
    }
}
