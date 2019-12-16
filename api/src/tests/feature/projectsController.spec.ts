import 'reflect-metadata'
import { cleanUpMetadata } from 'inversify-express-utils'
import * as moment from 'moment'
import * as request from 'supertest'
import { Repository } from 'typeorm'
import app from '../../bootstrap'
import Project from '@app/models/Project'
import { getRepository, slugify } from '@helpers/utils'
import { seedProjects, findProject } from '../utils'

describe('Projects', () => {
  beforeAll(async () => {
    cleanUpMetadata()

    await seedProjects()
  })

  it('should list the projects', async () => {
    await request(app)
      .get('/projects')
      .expect(200)
      .then(response => {
        expect(response.body).toHaveLength(2)
        expect(response.body).toContainEqual(
          expect.objectContaining({ name: 'Caribbean Waterpark' })
        )
      })

    await request(app)
      .get('/projects?featured')
      .expect(200)
      .then(response => {
        expect(response.body).toHaveLength(1)
        expect(response.body).toContainEqual(
          expect.objectContaining({ name: 'Workgalore' })
        )
      })
  })

  it('should create a project', async () => {
    const attributes = {
      slug: slugify('Hackdawg'),
      name: 'Hackdawg',
      startDate: moment()
        .subtract(1, 'year')
        .format('YYYY-MM-DD')
    }

    await request(app)
      .post('/projects')
      .send(attributes)
      .expect(201)
      .then(response => {
        expect(response.body).toMatchObject(attributes)
      })

    await getRepository(Project)
      .then(repo => repo.find())
      .then(projects => {
        expect(projects).toContainEqual(
          expect.objectContaining({ name: 'Hackdawg' })
        )
      })
  })

  it('should show a project', async () => {
    const project = await findProject()

    await request(app)
      .get(`/projects/${project.slug}`)
      .send(project)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject(project)
      })
  })

  it('should update a project', async () => {
    const project = await findProject()
    const newSlug = slugify('Hope')
    const attributes = {
      slug: newSlug,
      name: 'Hope',
      description: 'Bot that cares',
      startDate: moment()
        .subtract(1, 'month')
        .format('YYYY-MM-DD')
    }

    await request(app)
      .patch(`/projects/${project.slug}`)
      .send(attributes)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject(attributes)
      })

    await getRepository(Project)
      .then((repo: Repository<Project>) =>
        repo.findOneOrFail({ slug: newSlug })
      )
      .then((updatedProject: Project) => {
        expect(updatedProject).toMatchObject(attributes)
      })
  })

  it('should delete a project', async () => {
    const { slug } = await findProject()

    await request(app)
      .delete(`/projects/${slug}`)
      .expect(200)

    const result = await getRepository(
      Project
    ).then((repo: Repository<Project>) => repo.findOne({ slug }))

    expect(result).toBeUndefined()
  })
})
