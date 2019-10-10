import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { Repository } from 'typeorm'
import Project from '../models/Project'

export default class ProjectsController {
    /**
     * The repository of the project
     *
     * @readonly
     */
    private repo: Repository<Project>

    /**
     * Create a new controller instance
     *
     * @param repo The repository of the project
     */
    constructor(repo: Repository<Project>) {
        this.repo = repo
    }

    /**
     * Get a listing of projects
     *
     * @param req Request object
     * @param res Response object
     */
    public async list(req: Request, res: Response) {
        const projects = await this.repo.find()

        return res.send(projects)
    }

    /**
     * Create a new project
     *
     * @param req Request object
     * @param res Response object
     */
    public async store(req: Request, res: Response) {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() })
        }

        const resource = await this.repo.create({
            name: req.body.name,
            description: req.body.description
        })
        const project = await this.repo.save(resource)

        return res.send(project)
    }
}
