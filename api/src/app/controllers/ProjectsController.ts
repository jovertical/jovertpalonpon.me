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
import { FindManyOptions, Not, Repository, Equal } from 'typeorm'
import Project from '@app/models/Project'
import validateMiddleware from '@app/middlewares/validateMiddleware'
import storeValidation from '@app/validations/projectsStoreValidation'
import updateValidation from '@app/validations/projectsUpdateValidation'
import { getRepository, now, slugify } from '@helpers/utils'
import Controller from './Controller'

@controller('/projects')
export default class ProjectsController extends Controller {
  /**
   * Get a list of Project
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
   * Create a Project
   */
  @httpPost('/', validateMiddleware(storeValidation))
  public async store(
    @request() req: Request,
    @response() res: Response
  ): Promise<Response> {
    const project = await this.repo().then((repo: Repository<Project>) =>
      repo.save({
        slug: slugify(req.body.name),
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
   * Show a Project
   */
  @httpGet('/:slug')
  public async show(
    @response() res: Response,
    @requestParam('slug') slug: string
  ): Promise<Response> {
    const project = await this.repo().then((repo: Repository<Project>) =>
      repo.findOneOrFail({ slug })
    )

    return res.send(project)
  }

  /**
   * Update a Project
   */
  @httpPatch('/:slug', validateMiddleware(updateValidation))
  public async update(
    @request() req: Request,
    @response() res: Response,
    @requestParam('slug') slug: string
  ): Promise<Response> {
    const project = await this.repo().then(
      async (repo: Repository<Project>) => {
        const project = await repo.findOneOrFail({ slug })
        project.slug = slugify(req.body.name)
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
   * Delete a Project
   */
  @httpDelete('/:slug')
  public async delete(
    @response() res: Response,
    @requestParam('slug') slug: string
  ): Promise<Response> {
    await this.repo().then(async (repo: Repository<Project>) => {
      const project = await repo.findOneOrFail({ slug })

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
