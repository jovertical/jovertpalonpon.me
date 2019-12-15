import { Request, Response } from 'express'
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
import * as uuid from 'uuid/v4'
import { FindManyOptions, Not, Repository, Equal } from 'typeorm'
import Project from '../models/Project'
import { getRepository, now } from '../../helpers/utils'
import validateMiddleware from '../middlewares/validateMiddleware'
import storeValidation from '../validations/projectsStoreValidation'
import updateValidation from '../validations/projectsUpdateValidation'
import Controller from './Controller'

@controller('/projects')
export default class ProjectsController extends Controller {
  /**
   * Get a list of projects
   */
  @httpGet('/')
  public async list(
    @request() req: Request,
    @response() res: Response
  ): Promise<Response> {
    const options: FindManyOptions = {}

    if (req.query.hasOwnProperty('featured')) {
      options.where = { featuredAt: Not(Equal('')) }
    }

    const projects = await this.repo().then((repo: Repository<Project>) =>
      repo.find(options)
    )

    return res.send(projects)
  }

  /**
   * Create a new project
   */
  @httpPost('/', validateMiddleware(storeValidation))
  public async store(
    @request() req: Request,
    @response() res: Response
  ): Promise<Response> {
    const project = await this.repo().then((repo: Repository<Project>) =>
      repo.save({
        uuid: uuid(),
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        projectUrl: req.body.projectUrl,
        featuredAt: req.body.featuredAt
      })
    )

    return res.status(201).send(project)
  }

  /**
   * Update a project
   */
  @httpPatch('/:id', validateMiddleware(updateValidation))
  public async update(
    @request() req: Request,
    @response() res: Response,
    @requestParam('id') id: string
  ): Promise<Response> {
    const project = await this.repo().then(
      async (repo: Repository<Project>) => {
        const project = await repo.findOneOrFail(id)
        project.name = req.body.name
        project.description = req.body.description
        project.startDate = req.body.startDate
        project.projectUrl = req.body.projectUrl
        project.featuredAt = req.body.featuredAt
        project.updatedAt = now()

        return this.repo().then(repo => repo.save(project))
      }
    )

    return res.send(project)
  }

  /**
   * Delete a project
   */
  @httpDelete('/:id')
  public async delete(
    @response() res: Response,
    @requestParam('id') id: string
  ): Promise<Response> {
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
